import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  apiRoute: {
    platform: 'vercel'
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/posts/create', component: 'posts/create' },
    { path: '/login', component: 'login' },
    { path: '/register', component: 'register' },
    { path: '/posts/:postId', component: 'posts/post' },
  ],
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
