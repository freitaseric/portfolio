# Eric Freitas - Portfólio

Um portfólio moderno e responsivo construído com **Astro**, **Tailwind CSS** e **DaisyUI**.

## ✨ Características

- 🎨 Design moderno e responsivo
- 🌙 Modo escuro/claro
- 📱 Totalmente responsivo para todos os dispositivos
- ⚡ Performance otimizada com Astro
- 🎭 Animações suaves e interativas
- 🔍 SEO otimizado
- 🌍 Suporte a múltiplos idiomas (PT-BR/EN)

## 🚀 Tecnologias Utilizadas

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework CSS utilitário
- **DaisyUI** - Componentes UI para Tailwind
- **TypeScript** - Tipagem estática
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

## 📁 Estrutura do Projeto

```
src/
├── layouts/
│   └── Layout.astro      # Layout principal com SEO e metadados
├── pages/
│   └── index.astro       # Página principal do portfólio
├── styles/
│   └── global.css        # Estilos globais e variáveis CSS
public/
├── avatar.jpg            # Foto de perfil (fallback)
└── favicon.svg          # Ícone do site
```

## 🎯 Seções do Portfólio

1. **Hero Section** - Apresentação principal com CTA
2. **Sobre** - Informações pessoais e estatísticas
3. **Habilidades** - Tecnologias e níveis de proficiência
4. **Projetos** - Portfólio de trabalhos realizados
5. **Contato** - Formulário e informações de contato

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ ou Bun
- npm, yarn ou bun

### Instalação
```bash
# Clone o repositório
git clone https://github.com/freitaseric/freitaseric.com.git
cd freitaseric.com

# Instale as dependências
bun install
# ou
npm install
# ou
yarn install
```

### Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
bun dev
# ou
npm run dev
# ou
yarn dev
```

### Build
```bash
# Construa para produção
bun build
# ou
npm run build
# ou
yarn build
```

### Preview
```bash
# Visualize a build de produção
bun preview
# ou
npm run preview
# ou
yarn preview
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `src/styles/global.css`:

```css
:root {
    --primary-color: #6366f1;    /* Cor primária */
    --secondary-color: #8b5cf6;  /* Cor secundária */
    --accent-color: #06b6d4;     /* Cor de destaque */
}
```

### Conteúdo
- **Informações pessoais**: Edite `src/config/site.ts`
- **Projetos**: Modifique o array `projects` no arquivo de configuração
- **Habilidades**: Atualize o array `skills` com suas competências
- **Links sociais**: Substitua os valores no objeto `social`
- **GitHub**: Altere o username em `social.github` para buscar seu avatar automaticamente

### Imagens
- Substitua `public/avatar.jpg` por sua foto real
- Adicione imagens dos projetos em `public/`
- Atualize os caminhos das imagens no código

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops
- 🖥️ Telas grandes

## 🌙 Temas

- **Retro** - Tema claro padrão
- **Luxury** - Tema escuro elegante
- Toggle automático com persistência no localStorage

## 👤 Avatar do GitHub

O portfólio busca automaticamente sua foto de perfil do GitHub:

1. **Configure seu username**: Edite `src/config/site.ts` e altere `social.github`
2. **Avatar dinâmico**: A foto é carregada automaticamente da API do GitHub
3. **Informações extras**: Exibe seguidores, repositórios e bio do GitHub
4. **Fallback**: Se a API falhar, usa uma imagem local como backup

```typescript
// src/config/site.ts
social: {
    github: "seu-username-aqui", // ← Altere para seu username do GitHub
    // ... outras redes sociais
}
```

## 📧 Formulário de Contato

O formulário de contato está configurado mas precisa de backend para funcionar. Opções:
- **Netlify Forms** - Adicione `netlify` ao formulário
- **Formspree** - Serviço de formulários gratuito
- **Backend personalizado** - Implemente sua própria API

## 🚀 Deploy

### Netlify
```bash
# Build e deploy automático
git push origin main
```

### Vercel
```bash
# Deploy automático
vercel --prod
```

### GitHub Pages
```bash
# Build e deploy
npm run build
# Faça upload da pasta dist/
```

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar conforme necessário.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Contato

- **Email**: eric@freitaseric.com
- **Website**: https://freitaseric.com
- **GitHub**: [@freitaseric](https://github.com/freitaseric)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
