import { defineNuxtConfig } from "nuxt/config";
import { version as nuxtVersion } from 'nuxt/package.json'
import { AWSAmplifyCustomConfig } from "./amplify/types";

declare module 'nitropack' {
  interface NitroConfig {
    awsAmplify?: AWSAmplifyCustomConfig
  }
}

export default defineNuxtConfig({
  app: {
    // baseURL: '/base'
  },
  nitro: {
    // preset: provider === 'aws_amplify' ? "./amplify" : undefined,
    preset:  "./amplify",
    awsAmplify: {
      imageOptimization: {
        path: "/_nuxt/image",
        cacheControl: "public, max-age=3600, immutable"
      },
      imageSettings: {
          sizes: [100,200,300,500,640],
          domains: [],
          remotePatterns: [],
          formats: ["image/jpeg", "image/png", "image/webp", "image/avif"],
          minimumCacheTTL: 60,
          dangerouslyAllowSVG: false
      },
    },
    framework: {
      name: 'nuxt',
      version: nuxtVersion
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['UseFetchDemo'].includes(tag),
    },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      preload: ['javascript', 'vue', 'html'],
      theme: 'monokai',
    },
  },
  image: {
    provider: 'amplify',
    providers: {
      amplify: {
        provider: '~/amplify/image-provider.ts',
      }
    }
  }
});
