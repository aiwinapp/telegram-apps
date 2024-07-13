// build/getConfig.ts
import { defineConfig } from "file:///Users/konstantin/Documents/VPERED/telegram-apps/node_modules/.pnpm/vitest@1.6.0_@types+node@20.14.10_@vitest+ui@1.6.0_happy-dom@12.10.3/node_modules/vitest/dist/config.js";
import tsconfigPaths from "file:///Users/konstantin/Documents/VPERED/telegram-apps/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.11_@types+node@20.14.10_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///Users/konstantin/Documents/VPERED/telegram-apps/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.10_rollup@4.18.0_typescript@5.4.5_vite@5.2.11_@types+node@20.14.10_/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///Users/konstantin/Documents/VPERED/telegram-apps/packages/sdk/build/getConfig.ts";
function getConfig({
  filename = "index",
  input,
  formats,
  declarations = false
}) {
  return defineConfig(({ mode }) => {
    const tsconfigPath = mode === "test" ? "./tsconfig.test.json" : "./tsconfig.build.json";
    return {
      plugins: [
        tsconfigPaths({ projects: [tsconfigPath] }),
        declarations && dts({ outDir: "dist/dts", tsconfigPath })
      ],
      resolve: {
        alias: {
          "@": resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "../src")
        }
      },
      build: {
        outDir: "dist",
        emptyOutDir: false,
        sourcemap: true,
        lib: {
          name: "telegramApps.sdk",
          entry: input,
          formats,
          fileName: filename
        }
      },
      test: {
        environment: "happy-dom",
        coverage: {
          enabled: true,
          provider: "v8",
          include: ["src/**/*.ts"],
          exclude: ["src/**/*.test.ts"],
          branches: 80,
          functions: 80,
          statements: 80,
          lines: 80
        }
      }
    };
  });
}

// vite.iife.config.ts
var vite_iife_config_default = getConfig({
  input: "src/index.ts",
  formats: ["iife"]
});
export {
  vite_iife_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvZ2V0Q29uZmlnLnRzIiwgInZpdGUuaWlmZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva29uc3RhbnRpbi9Eb2N1bWVudHMvVlBFUkVEL3RlbGVncmFtLWFwcHMvcGFja2FnZXMvc2RrL2J1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva29uc3RhbnRpbi9Eb2N1bWVudHMvVlBFUkVEL3RlbGVncmFtLWFwcHMvcGFja2FnZXMvc2RrL2J1aWxkL2dldENvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva29uc3RhbnRpbi9Eb2N1bWVudHMvVlBFUkVEL3RlbGVncmFtLWFwcHMvcGFja2FnZXMvc2RrL2J1aWxkL2dldENvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgdHlwZSBVc2VyQ29uZmlnRm4gfSBmcm9tICd2aXRlc3QvY29uZmlnJztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHsgcmVzb2x2ZSwgZGlybmFtZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IHR5cGUgeyBMaWJyYXJ5Rm9ybWF0cyB9IGZyb20gJ3ZpdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKHtcbiAgZmlsZW5hbWUgPSAnaW5kZXgnLFxuICBpbnB1dCxcbiAgZm9ybWF0cyxcbiAgZGVjbGFyYXRpb25zID0gZmFsc2UsXG59OiB7XG4gIGlucHV0OiBzdHJpbmc7XG4gIGZpbGVuYW1lPzogc3RyaW5nO1xuICBmb3JtYXRzOiBMaWJyYXJ5Rm9ybWF0c1tdO1xuICBkZWNsYXJhdGlvbnM/OiBib29sZWFuO1xufSk6IFVzZXJDb25maWdGbiB7XG4gIHJldHVybiBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gICAgY29uc3QgdHNjb25maWdQYXRoID0gbW9kZSA9PT0gJ3Rlc3QnXG4gICAgICA/ICcuL3RzY29uZmlnLnRlc3QuanNvbidcbiAgICAgIDogJy4vdHNjb25maWcuYnVpbGQuanNvbic7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICB0c2NvbmZpZ1BhdGhzKHsgcHJvamVjdHM6IFt0c2NvbmZpZ1BhdGhdIH0pLFxuICAgICAgICBkZWNsYXJhdGlvbnMgJiYgZHRzKHsgb3V0RGlyOiAnZGlzdC9kdHMnLCB0c2NvbmZpZ1BhdGggfSksXG4gICAgICBdLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICdAJzogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuLi9zcmMnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBidWlsZDoge1xuICAgICAgICBvdXREaXI6ICdkaXN0JyxcbiAgICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIGxpYjoge1xuICAgICAgICAgIG5hbWU6ICd0ZWxlZ3JhbUFwcHMuc2RrJyxcbiAgICAgICAgICBlbnRyeTogaW5wdXQsXG4gICAgICAgICAgZm9ybWF0cyxcbiAgICAgICAgICBmaWxlTmFtZTogZmlsZW5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGVzdDoge1xuICAgICAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbScsXG4gICAgICAgIGNvdmVyYWdlOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwcm92aWRlcjogJ3Y4JyxcbiAgICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnRzJ10sXG4gICAgICAgICAgZXhjbHVkZTogWydzcmMvKiovKi50ZXN0LnRzJ10sXG4gICAgICAgICAgYnJhbmNoZXM6IDgwLFxuICAgICAgICAgIGZ1bmN0aW9uczogODAsXG4gICAgICAgICAgc3RhdGVtZW50czogODAsXG4gICAgICAgICAgbGluZXM6IDgwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9rb25zdGFudGluL0RvY3VtZW50cy9WUEVSRUQvdGVsZWdyYW0tYXBwcy9wYWNrYWdlcy9zZGtcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9rb25zdGFudGluL0RvY3VtZW50cy9WUEVSRUQvdGVsZWdyYW0tYXBwcy9wYWNrYWdlcy9zZGsvdml0ZS5paWZlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva29uc3RhbnRpbi9Eb2N1bWVudHMvVlBFUkVEL3RlbGVncmFtLWFwcHMvcGFja2FnZXMvc2RrL3ZpdGUuaWlmZS5jb25maWcudHNcIjtpbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICcuL2J1aWxkL2dldENvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbmZpZyh7XG4gIGlucHV0OiAnc3JjL2luZGV4LnRzJyxcbiAgZm9ybWF0czogWydpaWZlJ10sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXVYLFNBQVMsb0JBQXVDO0FBQ3ZhLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUNoQixTQUFTLFNBQVMsZUFBZTtBQUNqQyxTQUFTLHFCQUFxQjtBQUo4TSxJQUFNLDJDQUEyQztBQU90UixTQUFTLFVBQVU7QUFBQSxFQUN4QixXQUFXO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxFQUNBLGVBQWU7QUFDakIsR0FLaUI7QUFDZixTQUFPLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUNoQyxVQUFNLGVBQWUsU0FBUyxTQUMxQix5QkFDQTtBQUVKLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLGNBQWMsRUFBRSxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7QUFBQSxRQUMxQyxnQkFBZ0IsSUFBSSxFQUFFLFFBQVEsWUFBWSxhQUFhLENBQUM7QUFBQSxNQUMxRDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ0wsS0FBSyxRQUFRLFFBQVEsY0FBYyx3Q0FBZSxDQUFDLEdBQUcsUUFBUTtBQUFBLFFBQ2hFO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsS0FBSztBQUFBLFVBQ0gsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1A7QUFBQSxVQUNBLFVBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1YsU0FBUyxDQUFDLGFBQWE7QUFBQSxVQUN2QixTQUFTLENBQUMsa0JBQWtCO0FBQUEsVUFDNUIsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQ1gsWUFBWTtBQUFBLFVBQ1osT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QUN6REEsSUFBTywyQkFBUSxVQUFVO0FBQUEsRUFDdkIsT0FBTztBQUFBLEVBQ1AsU0FBUyxDQUFDLE1BQU07QUFDbEIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
