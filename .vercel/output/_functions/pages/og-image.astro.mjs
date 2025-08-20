export { renderers } from '../renderers.mjs';

const GET = ({ url }) => {
  const searchParams = url.searchParams;
  const title = searchParams.get("title") || "Eric Freitas";
  const description = searchParams.get("description") || "Desenvolvedor Full Stack";
  const locale = searchParams.get("locale") || "pt-BR";
  const width = 1200;
  const height = 630;
  const bgColor = "#0f172a";
  const primaryColor = "#3b82f6";
  const textColor = "#f8fafc";
  const accentColor = "#10b981";
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      
      <!-- Gradiente de fundo -->
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${accentColor};stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background com gradiente -->
      <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>
      
      <!-- Elementos decorativos -->
      <circle cx="100" cy="100" r="50" fill="${primaryColor}" opacity="0.1"/>
      <circle cx="${width - 100}" cy="${height - 100}" r="80" fill="${accentColor}" opacity="0.1"/>
      <circle cx="${width - 200}" cy="150" r="30" fill="${primaryColor}" opacity="0.05"/>
      
      <!-- Linha decorativa -->
      <line x1="0" y1="${height * 0.7}" x2="${width}" y2="${height * 0.7}" stroke="url(#accentGradient)" stroke-width="3" opacity="0.3"/>
      
      <!-- Logo/Nome principal -->
      <text x="${width / 2}" y="200" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700" text-anchor="middle" fill="${textColor}">
        Eric Freitas
      </text>
      
      <!-- Título dinâmico -->
      <text x="${width / 2}" y="320" font-family="Inter, Arial, sans-serif" font-size="48" font-weight="600" text-anchor="middle" fill="${textColor}">
        ${title}
      </text>
      
      <!-- Descrição -->
      <text x="${width / 2}" y="400" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="400" text-anchor="middle" fill="${textColor}" opacity="0.8">
        ${description}
      </text>
      
      <!-- Badge de localização -->
      <rect x="${width / 2 - 80}" y="450" width="160" height="40" rx="20" fill="url(#accentGradient)" opacity="0.9"/>
      <text x="${width / 2}" y="475" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="500" text-anchor="middle" fill="${textColor}">
        ${locale}
      </text>
      
      <!-- Ícones de tecnologia -->
      <g transform="translate(${width / 2 - 200}, 520)">
        <!-- React -->
        <circle cx="0" cy="0" r="15" fill="#61dafb"/>
        <text x="0" y="5" font-family="Inter, Arial, sans-serif" font-size="12" text-anchor="middle" fill="${bgColor}" font-weight="600">R</text>
        
        <!-- Node.js -->
        <circle cx="50" cy="0" r="15" fill="#339933"/>
        <text x="50" y="5" font-family="Inter, Arial, sans-serif" font-size="12" text-anchor="middle" fill="${textColor}" font-weight="600">N</text>
        
        <!-- TypeScript -->
        <circle cx="100" cy="0" r="15" fill="#3178c6"/>
        <text x="100" y="5" font-family="Inter, Arial, sans-serif" font-size="12" text-anchor="middle" fill="${textColor}" font-weight="600">T</text>
        
        <!-- Astro -->
        <circle cx="150" cy="0" r="15" fill="#ff5d01"/>
        <text x="150" y="5" font-family="Inter, Arial, sans-serif" font-size="12" text-anchor="middle" fill="${textColor}" font-weight="600">A</text>
        
        <!-- Tailwind -->
        <circle cx="200" cy="0" r="15" fill="#06b6d4"/>
        <text x="200" y="5" font-family="Inter, Arial, sans-serif" font-size="12" text-anchor="middle" fill="${textColor}" font-weight="600">T</text>
      </g>
      
      <!-- URL do site -->
      <text x="${width / 2}" y="${height - 50}" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="400" text-anchor="middle" fill="${textColor}" opacity="0.6">
        freitaseric.com
      </text>
    </svg>
  `;
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
