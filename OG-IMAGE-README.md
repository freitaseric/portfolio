# OG Image Dinâmica - freitaseric.com

## Visão Geral

Esta funcionalidade permite gerar dinamicamente imagens Open Graph (og-images) para diferentes páginas do site, melhorando significativamente o SEO e a aparência quando compartilhado em redes sociais.

## Como Funciona

A rota `/og-image` gera uma imagem SVG personalizada baseada nos parâmetros da URL. A imagem é otimizada para redes sociais com dimensões 1200x630 pixels.

## Parâmetros Disponíveis

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `title` | string | ❌ | "Eric Freitas" | Título da página |
| `description` | string | ❌ | "Desenvolvedor Full Stack" | Descrição da página |
| `locale` | string | ❌ | "pt-BR" | Idioma/localização |

## Exemplos de Uso

### 1. Imagem Padrão
```
/og-image
```

### 2. Com Título Personalizado
```
/og-image?title=Meus%20Projetos
```

### 3. Com Título e Descrição
```
/og-image?title=Sobre%20Mim&description=Conheça%20minha%20trajetória%20profissional
```

### 4. Com Todos os Parâmetros
```
/og-image?title=Contato&description=Entre%20em%20contato%20para%20projetos&locale=pt-BR
```

## Implementação no Layout

O layout principal foi atualizado para usar automaticamente a og-image dinâmica:

```astro
<meta property="og:image" content={`https://freitaseric.com/og-image?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&locale=${locale}`} />
```

## Características da Imagem

- **Dimensões**: 1200x630 pixels (formato padrão para redes sociais)
- **Formato**: SVG (escalável e leve)
- **Cores**: Paleta baseada no design do site
- **Elementos**:
  - Nome "Eric Freitas" em destaque
  - Título dinâmico da página
  - Descrição personalizada
  - Badge de localização
  - Ícones de tecnologias (React, Node.js, TypeScript, Astro, Tailwind)
  - URL do site

## Cache e Performance

- **Cache**: 1 hora (3600 segundos)
- **Tipo de Conteúdo**: `image/svg+xml`
- **Tamanho**: SVG leve e otimizado

## Página de Exemplos

Acesse `/og-image-examples` para ver exemplos visuais de como usar a funcionalidade e testar diferentes configurações.

## Benefícios

1. **SEO Melhorado**: Cada página tem uma og-image única e relevante
2. **Compartilhamento Social**: Imagens atrativas para Facebook, Twitter, LinkedIn
3. **Flexibilidade**: Fácil personalização para diferentes tipos de conteúdo
4. **Performance**: SVG leve e escalável
5. **Consistência**: Mantém a identidade visual do site

## Tecnologias Utilizadas

- **Astro**: Framework para geração estática
- **SVG**: Formato de imagem vetorial
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização (para a página de exemplos)

## Manutenção

Para modificar o design da og-image, edite o arquivo `src/pages/og-image.astro`. As principais seções são:

- Cores e estilos
- Layout dos elementos
- Tipografia
- Elementos decorativos
- Ícones de tecnologia

## Suporte

Esta funcionalidade é compatível com todas as principais redes sociais e plataformas que suportam Open Graph:

- Facebook
- Twitter
- LinkedIn
- WhatsApp
- Telegram
- Discord
- Slack
