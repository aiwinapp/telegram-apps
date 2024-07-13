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

// vite.config.ts
var vite_config_default = getConfig({
  input: "src/index.ts",
  formats: ["es", "cjs"],
  declarations: true
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvZ2V0Q29uZmlnLnRzIiwgInZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2tvbnN0YW50aW4vRG9jdW1lbnRzL1ZQRVJFRC90ZWxlZ3JhbS1hcHBzL3BhY2thZ2VzL3Nkay9idWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tvbnN0YW50aW4vRG9jdW1lbnRzL1ZQRVJFRC90ZWxlZ3JhbS1hcHBzL3BhY2thZ2VzL3Nkay9idWlsZC9nZXRDb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2tvbnN0YW50aW4vRG9jdW1lbnRzL1ZQRVJFRC90ZWxlZ3JhbS1hcHBzL3BhY2thZ2VzL3Nkay9idWlsZC9nZXRDb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgVXNlckNvbmZpZ0ZuIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB0eXBlIHsgTGlicmFyeUZvcm1hdHMgfSBmcm9tICd2aXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZyh7XG4gIGZpbGVuYW1lID0gJ2luZGV4JyxcbiAgaW5wdXQsXG4gIGZvcm1hdHMsXG4gIGRlY2xhcmF0aW9ucyA9IGZhbHNlLFxufToge1xuICBpbnB1dDogc3RyaW5nO1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgZm9ybWF0czogTGlicmFyeUZvcm1hdHNbXTtcbiAgZGVjbGFyYXRpb25zPzogYm9vbGVhbjtcbn0pOiBVc2VyQ29uZmlnRm4ge1xuICByZXR1cm4gZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICAgIGNvbnN0IHRzY29uZmlnUGF0aCA9IG1vZGUgPT09ICd0ZXN0J1xuICAgICAgPyAnLi90c2NvbmZpZy50ZXN0Lmpzb24nXG4gICAgICA6ICcuL3RzY29uZmlnLmJ1aWxkLmpzb24nO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdHNjb25maWdQYXRocyh7IHByb2plY3RzOiBbdHNjb25maWdQYXRoXSB9KSxcbiAgICAgICAgZGVjbGFyYXRpb25zICYmIGR0cyh7IG91dERpcjogJ2Rpc3QvZHRzJywgdHNjb25maWdQYXRoIH0pLFxuICAgICAgXSxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAnQCc6IHJlc29sdmUoZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnLi4vc3JjJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYnVpbGQ6IHtcbiAgICAgICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICBuYW1lOiAndGVsZWdyYW1BcHBzLnNkaycsXG4gICAgICAgICAgZW50cnk6IGlucHV0LFxuICAgICAgICAgIGZvcm1hdHMsXG4gICAgICAgICAgZmlsZU5hbWU6IGZpbGVuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRlc3Q6IHtcbiAgICAgICAgZW52aXJvbm1lbnQ6ICdoYXBweS1kb20nLFxuICAgICAgICBjb3ZlcmFnZToge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcHJvdmlkZXI6ICd2OCcsXG4gICAgICAgICAgaW5jbHVkZTogWydzcmMvKiovKi50cyddLFxuICAgICAgICAgIGV4Y2x1ZGU6IFsnc3JjLyoqLyoudGVzdC50cyddLFxuICAgICAgICAgIGJyYW5jaGVzOiA4MCxcbiAgICAgICAgICBmdW5jdGlvbnM6IDgwLFxuICAgICAgICAgIHN0YXRlbWVudHM6IDgwLFxuICAgICAgICAgIGxpbmVzOiA4MCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva29uc3RhbnRpbi9Eb2N1bWVudHMvVlBFUkVEL3RlbGVncmFtLWFwcHMvcGFja2FnZXMvc2RrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva29uc3RhbnRpbi9Eb2N1bWVudHMvVlBFUkVEL3RlbGVncmFtLWFwcHMvcGFja2FnZXMvc2RrL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rb25zdGFudGluL0RvY3VtZW50cy9WUEVSRUQvdGVsZWdyYW0tYXBwcy9wYWNrYWdlcy9zZGsvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICcuL2J1aWxkL2dldENvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbmZpZyh7XG4gIGlucHV0OiAnc3JjL2luZGV4LnRzJyxcbiAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgZGVjbGFyYXRpb25zOiB0cnVlLFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF1WCxTQUFTLG9CQUF1QztBQUN2YSxPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxTQUFTLGVBQWU7QUFDakMsU0FBUyxxQkFBcUI7QUFKOE0sSUFBTSwyQ0FBMkM7QUFPdFIsU0FBUyxVQUFVO0FBQUEsRUFDeEIsV0FBVztBQUFBLEVBQ1g7QUFBQSxFQUNBO0FBQUEsRUFDQSxlQUFlO0FBQ2pCLEdBS2lCO0FBQ2YsU0FBTyxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDaEMsVUFBTSxlQUFlLFNBQVMsU0FDMUIseUJBQ0E7QUFFSixXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxjQUFjLEVBQUUsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQUEsUUFDMUMsZ0JBQWdCLElBQUksRUFBRSxRQUFRLFlBQVksYUFBYSxDQUFDO0FBQUEsTUFDMUQ7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLE9BQU87QUFBQSxVQUNMLEtBQUssUUFBUSxRQUFRLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLFFBQVE7QUFBQSxRQUNoRTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxRQUNYLEtBQUs7QUFBQSxVQUNILE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQO0FBQUEsVUFDQSxVQUFVO0FBQUEsUUFDWjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLGFBQWE7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNSLFNBQVM7QUFBQSxVQUNULFVBQVU7QUFBQSxVQUNWLFNBQVMsQ0FBQyxhQUFhO0FBQUEsVUFDdkIsU0FBUyxDQUFDLGtCQUFrQjtBQUFBLFVBQzVCLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLFlBQVk7QUFBQSxVQUNaLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDs7O0FDekRBLElBQU8sc0JBQVEsVUFBVTtBQUFBLEVBQ3ZCLE9BQU87QUFBQSxFQUNQLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxFQUNyQixjQUFjO0FBQ2hCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
