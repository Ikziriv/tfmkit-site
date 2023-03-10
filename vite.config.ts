import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { extractorSvelte } from '@unocss/core';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import UnoCSS from 'unocss/vite';
import Icons from 'unplugin-icons/vite';
import presetIcons from '@unocss/preset-icons';
import presetWind from '@unocss/preset-wind';
import * as path from 'path';

export default defineConfig({
	build: {
		target: 'esnext'
	},
	plugins: [
		sveltekit(),
        SvelteKitPWA({
            srcDir: './src',
            mode: 'development',
            strategies: 'injectManifest',
            filename: 'prompt-sw.ts',
            scope: '/',
            base: '/',
            manifest: {
                short_name: 'TFMKIT PWA',
                name: 'TFMKIT PWA',
                start_url: '/',
                scope: '/',
                display: 'standalone',
                theme_color: "#ffffff",
                background_color: "#ffffff",
                icons: [
                    {
                        src: '/android-icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-icon-152x152.png',
                        sizes: '152x152',
                        type: 'image/png',
                    },
                ],
            },
            injectManifest: {
                globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
            },
            devOptions: {
                enabled: true,
                type: 'module',
                navigateFallback: '/',
            },
            // if you have shared info in svelte config file put in a separate module and use it also here
            kit: {}
        }),
        UnoCSS({
            extractors: [extractorSvelte],
            shortcuts: [
                { logo: 'i-logos:svelte-icon w-6em h-6em transform transition-800 hover:rotate-180' },
            ],
            theme: {
                breakpoints: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    xl2: '1536px',
                },
            },
            presets: [
				presetWind(),
                presetIcons({
                    prefix: 'i-',
                    extraProperties: {
                        'display': 'inline-block',
                        'vertical-align': 'middle',
                    },
                }),
            ],
        }),
        Icons({
          compiler: 'svelte',
        }),
	],
    resolve: {
        alias: {
            $lib: path.resolve('./src/lib'),
            $layouts: path.resolve('./src/lib/layouts'),
            $section: path.resolve('./src/lib/section'),
            $components: path.resolve('./src/lib/components'),
            $general: path.resolve('./src/lib/components/general'),
            $shared: path.resolve('./src/lib/components/shared'),
            $helper: path.resolve('./src/lib/helper'),
            $images: path.resolve('./src/lib/images'),
            $stores: path.resolve('./src/lib/stores'),
            $typings: path.resolve('./src/lib/typings'),
            $utils: path.resolve('./src/lib/utils'),
            $widget: path.resolve('./src/lib/widget'),
            $config: path.resolve('./src/lib/config'),
            $contents: path.resolve('./src/lib/contents'),
            $styles: path.resolve('./src/styles')
        }
    },
});
