import { ActionError, defineAction } from "astro:actions";
import axios, { HttpStatusCode } from "axios";
import type { GithubErrorResponse, Repository, User } from "../types/github";

export default {
  getUserData: defineAction({
    handler: async () => {
      try {
        const response = await axios.get<User>("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
        });

        if (response.status === HttpStatusCode.Forbidden) {
          const { data } = response as any as GithubErrorResponse;

          throw new ActionError({
            code: "FORBIDDEN",
            message: data.message,
          });
        }

        return response.data;
      } catch (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `${error}`,
        });
      }
    },
  }),

  getPublicRepositories: defineAction({
    handler: async () => {
      try {
        const response = await axios.get<Repository[]>(
          `https://api.github.com/user/repos?visibility=all&affiliation=owner`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        );

        if (response.status === HttpStatusCode.Forbidden) {
          const { data } = response as any as GithubErrorResponse;

          throw new ActionError({
            code: "FORBIDDEN",
            message: data.message,
          });
        }

        const repositoriesWithLanguages = await Promise.all(
          response.data.map(async (repo) => {
            try {
              const languagesResponse = await axios.get<Record<string, number>>(
                `https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`,
                {
                  headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                  },
                }
              );

              return {
                ...repo,
                languages: languagesResponse.data,
              };
            } catch (error) {
              return {
                ...repo,
                languages: {},
              };
            }
          })
        );

        return repositoriesWithLanguages;
      } catch (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `${error}`,
        });
      }
    },
  }),
};
