import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { extractorSvelte } from '@unocss/core';
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
            $components: path.resolve('./src/lib/components'),
            $general: path.resolve('./src/lib/components/general'),
            $section: path.resolve('./src/lib/components/section'),
            $shared: path.resolve('./src/lib/components/shared'),
            $helper: path.resolve('./src/lib/helper'),
            $images: path.resolve('./src/lib/images'),
            $stores: path.resolve('./src/lib/stores'),
            $typings: path.resolve('./src/lib/typings'),
            $utils: path.resolve('./src/lib/utils'),
            $config: path.resolve('./src/lib/config'),
            $contents: path.resolve('./src/lib/contents'),
            $styles: path.resolve('./src/styles')
        }
    },
});
