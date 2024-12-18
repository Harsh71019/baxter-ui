// vite.config.ts
import { defineConfig } from "file:///C:/Users/harsh/OneDrive/Desktop/baxter-ui/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/harsh/OneDrive/Desktop/baxter-ui/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import dts from "file:///C:/Users/harsh/OneDrive/Desktop/baxter-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\harsh\\OneDrive\\Desktop\\baxter-ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
      rollupTypes: true,
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "BaxterUI",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        // Ensure CSS file is generated with a specific name
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name || "unknown";
        }
      }
    },
    // These ensure CSS is handled correctly
    cssCodeSplit: false,
    cssMinify: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxoYXJzaFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGJheHRlci11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaGFyc2hcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxiYXh0ZXItdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2hhcnNoL09uZURyaXZlL0Rlc2t0b3AvYmF4dGVyLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IFsnc3JjJ10sXHJcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxyXG4gICAgICBjb3B5RHRzRmlsZXM6IHRydWUsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdCYXh0ZXJVSScsXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXHJcbiAgICAgIGZpbGVOYW1lOiBmb3JtYXQgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXHJcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIEVuc3VyZSBDU1MgZmlsZSBpcyBnZW5lcmF0ZWQgd2l0aCBhIHNwZWNpZmljIG5hbWVcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSAnc3R5bGUuY3NzJykgcmV0dXJuICdpbmRleC5jc3MnO1xyXG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIHx8ICd1bmtub3duJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIFRoZXNlIGVuc3VyZSBDU1MgaXMgaGFuZGxlZCBjb3JyZWN0bHlcclxuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXHJcbiAgICBjc3NNaW5pZnk6IHRydWUsXHJcbiAgfSxcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLG9CQUFvQjtBQUN0VixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixTQUFTLENBQUMsS0FBSztBQUFBLE1BQ2YsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLFlBQVUsU0FBUyxNQUFNO0FBQUEsSUFDckM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBO0FBQUEsUUFFQSxnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxTQUFTLFlBQWEsUUFBTztBQUMzQyxpQkFBTyxVQUFVLFFBQVE7QUFBQSxRQUMzQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
