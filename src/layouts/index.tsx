import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className="relative">
      <div
        className="fixed w-96 bottom-24 hidden right-8 py-4 z-50 lg:flex transition-all
        justify-end flex-col p-4 bg-white shadow hover:shadow-xl rounded"
      >
        <p className="text-right text-xs">
          这个博客是使用 <a href="https://next.umijs.org/zh-CN">Umi.js 框架</a>
          <br />
          搭配 <a href="https://planetscale.com/">PlanetScale</a> +{" "}
          <a href="https://www.prisma.io/">Upstash </a>+
          <a href="https://www.prisma.io/">Prisma </a>+
          <a href="https://www.prisma.io/">Tailwindcss </a>+
          <a href="https://tailwindcss.com/">DaisyUI</a> <br />
          并且部署在 <a href="https://vercel.com/">Vercel</a> 的一个示例！
        </p>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
