import { e as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, f as createAstro, n as renderHead, o as renderSlot, k as renderComponent } from './astro/server_a2HHcGMj.mjs';
import 'kleur/colors';
import 'clsx';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_CzDnE-r7.mjs';
/* empty css                         */
import { a as actions } from './_astro_actions_3hm5dZfp.mjs';

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en-us", locales: ["pt-br", "en-us"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const $$LanguageSwapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-6 right-6 z-50"> <a id="en-us"${addAttribute(getRelativeLocaleUrl("en-us"), "href")} class="btn btn-xs">
EN-US
</a> <a id="pt-br"${addAttribute(getRelativeLocaleUrl("pt-br"), "href")} class="btn btn-xs">
PT-BR
</a> </div> ${renderScript($$result, "/home/ericf/projects/freitaseric.com/src/components/LanguageSwapper.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ericf/projects/freitaseric.com/src/components/LanguageSwapper.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    locale,
    title = "Eric Freitas - Desenvolvedor Full Stack",
    description = "Portf\xF3lio de Eric Freitas, desenvolvedor full stack apaixonado por criar solu\xE7\xF5es inovadoras e experi\xEAncias digitais excepcionais"
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content="desenvolvedor, full stack, portfólio, Eric Freitas, programação, web development"><meta name="author" content="Eric Freitas"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://freitaseric.com/"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(`https://freitaseric.com/og-image?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&locale=${locale}`, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="https://freitaseric.com/"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(`https://freitaseric.com/og-image?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&locale=${locale}`, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Font Awesome --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><!-- Devicon --><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">${renderHead()}</head> <body class="font-sans antialiased"> ${renderSlot($$result, $$slots["default"])} <!-- Language Swapper --> ${renderComponent($$result, "LanguageSwapper", $$LanguageSwapper, {})} </body></html>`;
}, "/home/ericf/projects/freitaseric.com/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$GitHubAvatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GitHubAvatar;
  const { data, error } = await Astro2.callAction(actions.github.getUserData, {});
  return renderTemplate`${maybeRenderHead()}<div class="github-avatar" data-astro-cid-7xpyvijc> <div class="avatar mb-8" data-astro-cid-7xpyvijc> <div class="size-36 rounded-full ring ring-white/30 ring-offset-4 ring-offset-primary mx-auto overflow-hidden" data-astro-cid-7xpyvijc> ${error ? renderTemplate`<!-- Fallback para imagem local -->
                <img src="/avatar.jpg" alt="Avatar Fallback" class="w-full h-full object-cover" data-astro-cid-7xpyvijc>` : renderTemplate`<!-- Avatar do GitHub -->
                <img${addAttribute(data?.avatar_url, "src")}${addAttribute(`${data?.name} - Avatar do GitHub`, "alt")} class="w-full h-full object-cover" loading="lazy" data-astro-cid-7xpyvijc>`} </div> </div> ${data && !error && renderTemplate`<div class="text-center mb-4" data-astro-cid-7xpyvijc> <div class="flex justify-center space-x-6 text-white/80 mb-4" data-astro-cid-7xpyvijc> <div class="text-center" data-astro-cid-7xpyvijc> <div class="text-lg font-semibold" data-astro-cid-7xpyvijc>${data.followers}</div> <div class="text-sm text-white/60" data-astro-cid-7xpyvijc>Followers</div> </div> <div class="text-center" data-astro-cid-7xpyvijc> <div class="text-lg font-semibold" data-astro-cid-7xpyvijc>${data.public_repos}</div> <div class="text-sm text-white/60" data-astro-cid-7xpyvijc>Repos</div> </div> </div> ${data.bio && renderTemplate`<p class="text-white/80 text-sm max-w-md mx-auto mb-4" data-astro-cid-7xpyvijc>
"${data.bio}"
</p>`} </div>`} </div> `;
}, "/home/ericf/projects/freitaseric.com/src/components/GitHubAvatar.astro", void 0);

const siteConfig = {
  pt: {
    personal: {
      name: "Eric Freitas",
      title: "Desenvolvedor Full Stack & Designer de Experiências Digitais",
      email: "contato@freitaseric.com",
      location: "Roraima, Brasil",
      availability: "Disponível para projetos",
      bio: "Sou um desenvolvedor full stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais. Com mais de 5 anos de experiência, especializo-me em desenvolvimento web moderno, aplicações móveis e arquiteturas escaláveis."
    },
    social: {
      github: "https://github.com/freitaseric",
      linkedin: "https://github.com/freitaseric",
      twitter: "https://github.com/freitaseric"
    },
    stats: {
      experience: 3,
      projects: 5,
      clients: 3,
      technologies: 10
    },
    skills: [
      { name: "Next.js", level: 70, icon: "devicon-nextjs-plain" },
      { name: "Astro", level: 60, icon: "devicon-astro-plain" },
      { name: "TypeScript", level: 90, icon: "devicon-typescript-plain" },
      { name: "Kotlin", level: 40, icon: "devicon-kotlin-plain" },
      { name: "Docker", level: 25, icon: "devicon-docker-plain" },
      { name: "Git", level: 75, icon: "devicon-git-plain" }
    ],
    seo: {
      title: "Eric Freitas - Desenvolvedor Full Stack",
      description: "Portfólio de Eric Freitas, desenvolvedor full stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais"}
  },
  en: {
    personal: {
      name: "Eric Freitas",
      title: "Full Stack Developer & Digital Experience Designer",
      email: "contato@freitaseric.com",
      location: "Roraima, Brazil",
      availability: "Available for projects",
      bio: "I am a full stack developer passionate about creating innovative solutions and exceptional digital experiences. With over 5 years of experience, I specialize in modern web development, mobile applications, and scalable architectures."
    },
    social: {
      github: "https://github.com/freitaseric",
      linkedin: "https://github.com/freitaseric",
      twitter: "https://github.com/freitaseric"
    },
    stats: {
      experience: 2,
      projects: 5,
      clients: 3,
      technologies: 10
    },
    skills: [
      { name: "Next.js", level: 70, icon: "devicon-nextjs-plain" },
      { name: "Astro", level: 60, icon: "devicon-astro-plain" },
      { name: "TypeScript", level: 90, icon: "devicon-typescript-plain" },
      { name: "Kotlin", level: 40, icon: "devicon-kotlin-plain" },
      { name: "Docker", level: 25, icon: "devicon-docker-plain" },
      { name: "Git", level: 75, icon: "devicon-git-plain" }
    ],
    seo: {
      title: "Eric Freitas - Full Stack Developer",
      description: "Portfolio of Eric Freitas, a full stack developer passionate about creating innovative solutions and exceptional digital experiences"}
  }
};

const $$Astro = createAstro();
const $$GithubProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GithubProjects;
  const { data, error } = await Astro2.callAction(
    actions.github.getPublicRepositories,
    {}
  );
  return renderTemplate`${error ? renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-error"><i class="fa-solid fa-circle-xmark"></i><span>${error.message}</span></div>` : renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${data.sort((a, b) => b.stars - a.stars).slice(0, 6).map((repo) => renderTemplate`<div class="card bg-base-100 w-96 shadow-sm"><div class="card-body"><h2 class="card-title">${repo.name}${repo.private ? renderTemplate`<div class="badge badge-soft badge-accent"><i class="fa-solid fa-lock"></i></div>` : renderTemplate`<div class="badge badge-soft"><i class="fa-solid fa-lock-open"></i></div>`}</h2><p>${repo.description}</p><div class="flex flex-row justify-center-safe">${Object.keys(repo.languages).map((language) => renderTemplate`<div class="badge badge-soft badge-success">${language}</div>`)}</div><div class="card-actions justify-end">${!repo.private && renderTemplate`<a${addAttribute(repo.html_url, "href")} class="btn btn-info">
Source
</a>`}${!repo.private && repo.homepage && renderTemplate`<a${addAttribute(repo.homepage, "href")} class="btn btn-info btn-soft">
Website
</a>`}</div></div></div>`)}</div>`}`;
}, "/home/ericf/projects/freitaseric.com/src/components/GithubProjects.astro", void 0);

export { $$Layout as $, $$GitHubAvatar as a, $$GithubProjects as b, siteConfig as s };
