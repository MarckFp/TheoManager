import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

const host = process.env.TAURI_DEV_HOST

export default defineConfig(async () => ({
  clearScreen: false,

  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  plugins: [
    sveltekit(),
    tailwindcss(),
    SvelteKitPWA({
      devOptions: {
          enabled: true,
          type: 'module',
          navigateFallback: '/',
          suppressWarnings: true
      },
      strategies: 'generateSW',
      registerType: 'prompt',
      pwaAssets: {
          disabled: false,
          config: true,
      },
      manifest: {
        name: 'TheoManager',
        short_name: 'TheoManager',
        description: 'App to manage and handle your congregation and all your theocratic life!',
        display: 'standalone',
        display_override: ["standalone", "fullscreen", "minimal-ui", "window-controls-overlay", "browser"],
        theme_color: '#1d232a',
        background_color: "#1d232a",
        start_url: '/app',
        scope: '/app',
        id: '/app',
        lang: "en",
        dir: "ltr",
        categories: ["utilities", "productivity"],
        handle_links: "preferred",
        orientation: "natural",
        launch_handler: {
          client_mode: ["auto", "navigate-existing"]
        },
        edge_side_panel: {
          preferred_width: 500
        },
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ],
      }
  })
  ]
}))
