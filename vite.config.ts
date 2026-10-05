import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Embute o JavaScript e o CSS dentro do dist/index.html.
 * Assim o site abre com duplo clique no index.html (file://), sem servidor,
 * e continua funcionando normalmente em qualquer hospedagem.
 */
function inlineEntry(): Plugin {
  return {
    name: 'inline-entry',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = Object.values(bundle).find((f) => f.type === 'asset' && f.fileName === 'index.html');
      if (!html || html.type !== 'asset') return;
      let out = String(html.source);

      for (const [name, file] of Object.entries(bundle)) {
        if (file.type === 'chunk' && file.isEntry) {
          const code = file.code.replace(/<\/script/gi, '<\\/script');
          out = out.replace(new RegExp(`<script[^>]*src="\\./${file.fileName}"[^>]*></script>`), '');
          out = out.replace('</body>', `<script type="module">\n${code}\n</script>\n</body>`);
          delete bundle[name];
        } else if (file.type === 'asset' && file.fileName.endsWith('.css')) {
          // URLs relativas ao CSS (assets/) passam a ser relativas à página
          const css = String(file.source).replace(/url\(\.\//g, 'url(./assets/');
          out = out.replace(new RegExp(`<link[^>]*href="\\./${file.fileName}"[^>]*>`), `<style>\n${css}\n</style>`);
          delete bundle[name];
        }
      }
      html.source = out;
    },
  };
}

// base relativo: o site funciona em qualquer subpasta, domínio ou aberto direto do computador.
export default defineConfig({
  base: './',
  plugins: [react(), inlineEntry()],
  build: { assetsInlineLimit: 0, cssCodeSplit: false, modulePreload: false },
});
