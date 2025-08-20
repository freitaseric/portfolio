import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_a2HHcGMj.mjs';
import 'kleur/colors';
import { $ as $$Layout, s as siteConfig, a as $$GitHubAvatar, b as $$GithubProjects } from '../chunks/GithubProjects_CWV058rI.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { personal, social, stats, skills, seo } = siteConfig.pt;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": "pt-br", "title": seo.title, "description": seo.description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden"> <div class="absolute inset-0 bg-black/20"></div> <div class="container mx-auto px-4 text-center relative z-10"> ${renderComponent($$result2, "GitHubAvatar", $$GitHubAvatar, {})} <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"> ${personal.name} </h1> <p class="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-delay"> ${personal.title} </p> <div class="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2"> <a href="#projetos" class="btn btn-primary btn-lg"> <i class="fas fa-rocket mr-2"></i>
Ver Projetos
</a> <a href="#contato" class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"> <i class="fas fa-envelope mr-2"></i>
Entre em Contato
</a> </div> <div class="flex justify-center space-x-6 text-white/80"> <a${addAttribute(social.github, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fab fa-github text-xl"></i> </a> <a${addAttribute(social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fab fa-linkedin text-xl"></i> </a> <a${addAttribute(social.twitter, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fab fa-twitter text-xl"></i> </a> </div> </div> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> <i class="fas fa-chevron-down text-2xl text-white/70"></i> </div> </section>  <section id="sobre" class="py-20 bg-base-100"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4">Sobre Mim</h2> <div class="w-24 h-1 bg-primary mx-auto"></div> </div> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <h3 class="text-2xl font-semibold text-primary">Olá! 👋</h3> <p class="text-lg leading-relaxed"> ${personal.bio} </p> <p class="text-lg leading-relaxed">
Acredito que a tecnologia deve ser não apenas funcional, mas também
            intuitiva e agradável de usar. Cada projeto é uma oportunidade de
            aprender algo novo e superar desafios criativos.
</p> <div class="flex flex-wrap gap-4"> <div class="badge badge-primary badge-lg">Full Stack</div> <div class="badge badge-secondary badge-lg">UI/UX Design</div> <div class="badge badge-accent badge-lg">Mobile Dev</div> <div class="badge badge-outline badge-lg">DevOps</div> </div> </div> <div class="relative"> <div class="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-2xl"> <div class="grid grid-cols-2 gap-6"> <div class="text-center"> <div class="text-3xl font-bold text-info"> ${stats.experience}+
</div> <div class="text-sm text-gray-600">Anos de Experiência</div> </div> <div class="text-center"> <div class="text-3xl font-bold text-success"> ${stats.projects}+
</div> <div class="text-sm text-gray-600">Projetos Concluídos</div> </div> <div class="text-center"> <div class="text-3xl font-bold text-warning"> ${stats.clients}+
</div> <div class="text-sm text-gray-600">Clientes Satisfeitos</div> </div> <div class="text-center"> <div class="text-3xl font-bold text-error"> ${stats.technologies}+
</div> <div class="text-sm text-gray-600">Tecnologias</div> </div> </div> </div> </div> </div> </div> </section>  <section id="habilidades" class="py-20 bg-base-200"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4">Minhas Habilidades</h2> <div class="w-24 h-1 bg-primary mx-auto"></div> <p class="text-xl text-gray-600 mt-4">
Tecnologias e ferramentas que domino
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${skills.map((skill) => renderTemplate`<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"> <div class="card-body"> <div class="flex items-center mb-4"> <i${addAttribute(`${skill.icon} text-3xl text-primary mr-3`, "class")}></i> <h3 class="text-xl font-semibold">${skill.name}</h3> </div> <div class="w-full bg-gray-200 rounded-full h-2"> <div class="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"${addAttribute(`width: ${skill.level}%`, "style")}></div> </div> <div class="text-right text-sm text-gray-600 mt-2"> ${skill.level}%
</div> </div> </div>`)} </div> </div> </section>  <section id="projetos" class="py-20 bg-base-100"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4">Projetos em Destaque</h2> <div class="w-24 h-1 bg-primary mx-auto"></div> <p class="text-xl text-gray-600 mt-4">
Alguns dos meus trabalhos mais recentes
</p> </div> ${renderComponent($$result2, "GithubProjects", $$GithubProjects, {})} </div> </section>  <section id="contato" class="py-20 bg-base-200"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4">Vamos Conversar?</h2> <div class="w-24 h-1 bg-primary mx-auto"></div> <p class="text-xl text-gray-600 mt-4">
Estou sempre aberto a novas oportunidades e colaborações
</p> </div> <div class="grid md:grid-cols-2 gap-12"> <div class="space-y-8"> <div> <h3 class="text-2xl font-semibold mb-6">Informações de Contato</h3> <div class="space-y-4"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"> <i class="fas fa-envelope text-primary text-xl"></i> </div> <div> <div class="font-semibold">Email</div> <div class="text-gray-600"> ${personal.email} </div> </div> </div> <div class="flex items-center space-x-4"> <div class="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center"> <i class="fas fa-map-marker-alt text-secondary text-xl"></i> </div> <div> <div class="font-semibold">Localização</div> <div class="text-gray-600"> ${personal.location} </div> </div> </div> <div class="flex items-center space-x-4"> <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center"> <i class="fas fa-clock text-accent text-xl"></i> </div> <div> <div class="font-semibold">Disponibilidade</div> <div class="text-gray-600"> ${personal.availability} </div> </div> </div> </div> </div> <div> <h3 class="text-2xl font-semibold mb-6">Redes Sociais</h3> <div class="flex space-x-4"> <a${addAttribute(social.github, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fab fa-github text-xl"></i> </a> <a${addAttribute(social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fab fa-linkedin text-xl"></i> </a> <a${addAttribute(social.twitter, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fab fa-twitter text-xl"></i> </a> </div> </div> </div> </div> </div> </section> ` })} <!-- Footer --> <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4"> <aside> <p>
Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} - Todos os direitos reservados por
      Eric Freitas
</p> </aside> </footer>`;
}, "/home/ericf/projects/freitaseric.com/src/pages/pt-br/index.astro", void 0);

const $$file = "/home/ericf/projects/freitaseric.com/src/pages/pt-br/index.astro";
const $$url = "/pt-br";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
