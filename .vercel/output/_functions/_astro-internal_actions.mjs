import './chunks/_astro_actions_3hm5dZfp.mjs';
import axios, { HttpStatusCode } from 'axios';
import { d as defineAction } from './chunks/server_BoprS-J4.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_D1kkk2Vf.mjs';

const github = {
  getUserData: defineAction({
    handler: async () => {
      try {
        const response = await axios.get("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
          }
        });
        if (response.status === HttpStatusCode.Forbidden) {
          const { data } = response;
          throw new ActionError({
            code: "FORBIDDEN",
            message: data.message
          });
        }
        return response.data;
      } catch (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `${error}`
        });
      }
    }
  }),
  getPublicRepositories: defineAction({
    handler: async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/user/repos?visibility=all&affiliation=owner`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            }
          }
        );
        if (response.status === HttpStatusCode.Forbidden) {
          const { data } = response;
          throw new ActionError({
            code: "FORBIDDEN",
            message: data.message
          });
        }
        const repositoriesWithLanguages = await Promise.all(
          response.data.map(async (repo) => {
            try {
              const languagesResponse = await axios.get(
                `https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`,
                {
                  headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                  }
                }
              );
              return {
                ...repo,
                languages: languagesResponse.data
              };
            } catch (error) {
              return {
                ...repo,
                languages: {}
              };
            }
          })
        );
        return repositoriesWithLanguages;
      } catch (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `${error}`
        });
      }
    }
  })
};

const server = {
  github
};

export { server };
