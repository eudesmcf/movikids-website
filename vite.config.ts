import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use base '/' em desenvolvimento para evitar 404 local;
  // em produção (build) use o caminho do repositório para GitHub Pages
    // Use base '/' em desenvolvimento para evitar 404 local.
    // Em produção, publique no root ('/') quando houver um CNAME/custom domain
    // (útil para GitHub Pages com domínio customizado). Se quiser publicar
    // em um subpath (ex: '/movikids-website/'), ajuste a variável de ambiente
    // VITE_BASE ou modifique aqui.
    base: process.env.VITE_BASE || (mode === 'development' ? '/' : '/'),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
