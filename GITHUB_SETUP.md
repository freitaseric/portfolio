# 🚀 Configuração do Avatar do GitHub

## ✨ Funcionalidade Implementada

Seu portfólio agora busca **automaticamente** sua foto de perfil do GitHub via API, incluindo informações adicionais como seguidores, repositórios e bio.

## 🔧 Como Configurar

### 1. Edite o Arquivo de Configuração

Abra `src/config/site.ts` e altere o username do GitHub:

```typescript
// src/config/site.ts
export const siteConfig = {
    // ... outras configurações
    
    social: {
        github: "freitaseric", // ← ALTERE PARA SEU USERNAME
        linkedin: "#",
        twitter: "#",
        website: "https://freitaseric.com"
    },
    
    // ... resto da configuração
};
```

### 2. Personalize Suas Informações

No mesmo arquivo, você pode personalizar:

```typescript
personal: {
    name: "Seu Nome Aqui",
    title: "Seu Título Profissional",
    email: "seu@email.com",
    location: "Sua Cidade, País",
    bio: "Sua descrição pessoal..."
}
```

## 🌟 O que é Exibido Automaticamente

### ✅ **Avatar**
- Foto de perfil atual do GitHub
- Atualização automática quando você mudar no GitHub
- Tamanho responsivo e otimizado

### ✅ **Informações do Perfil**
- Nome real (se configurado no GitHub)
- Bio/descrição do perfil
- Número de seguidores
- Número de repositórios públicos

### ✅ **Links Funcionais**
- Link direto para seu perfil do GitHub
- Abre em nova aba
- SEO otimizado

## 🔄 Como Funciona

1. **Requisição à API**: O componente faz uma requisição para `https://api.github.com/users/SEU_USERNAME`
2. **Processamento**: Extrai avatar, nome, bio, seguidores e repositórios
3. **Exibição**: Renderiza as informações de forma elegante
4. **Fallback**: Se algo der errado, usa imagem local como backup

## 🚨 Limitações da API do GitHub

- **Rate Limit**: 60 requisições por hora para IPs não autenticados
- **Cache**: O Astro faz cache das requisições durante o build
- **Disponibilidade**: Depende da API do GitHub estar online

## 🎨 Personalização do Avatar

### Tamanho
```astro
<GitHubAvatar username="seu-username" size={128} />
```

### Fallback
```astro
<GitHubAvatar 
    username="seu-username" 
    size={128} 
    fallback="/minha-foto.jpg" 
/>
```

## 🔍 Testando

1. **Desenvolvimento**: Execute `bun run dev`
2. **Verifique**: A foto deve aparecer automaticamente
3. **Inspecione**: Abra o DevTools para ver as requisições à API

## 🐛 Solução de Problemas

### Avatar não aparece?
- Verifique se o username está correto
- Confirme se o perfil do GitHub é público
- Teste a API diretamente: `https://api.github.com/users/SEU_USERNAME`

### Erro de rate limit?
- Aguarde 1 hora ou use um IP diferente
- Em produção, isso raramente acontece devido ao cache

### Imagem quebrada?
- O fallback deve funcionar automaticamente
- Verifique se o arquivo `/public/avatar.jpg` existe

## 📱 Responsividade

O avatar é totalmente responsivo:
- **Mobile**: 96px (12rem)
- **Tablet**: 112px (14rem)  
- **Desktop**: 128px (16rem)

## 🎯 Próximos Passos

1. ✅ Configure seu username do GitHub
2. ✅ Personalize suas informações no `site.ts`
3. ✅ Teste localmente com `bun run dev`
4. ✅ Deploy para produção
5. 🎉 Seu avatar do GitHub aparecerá automaticamente!

---

**💡 Dica**: Mantenha seu perfil do GitHub atualizado - as mudanças aparecerão automaticamente no seu portfólio!
