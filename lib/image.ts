// lib/image.ts
const shimmer = (w: number, h: number) =>
  `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
     <defs><linearGradient id="g"><stop stop-color="#111" offset="20%"/><stop stop-color="#222" offset="50%"/><stop stop-color="#111" offset="70%"/></linearGradient></defs>
     <rect width="${w}" height="${h}" fill="#111"/>
     <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
     <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
   </svg>`;

export const blurDataURL = (w = 1200, h = 675) =>
  `data:image/svg+xml;base64,${Buffer.from(shimmer(w, h)).toString("base64")}`;
