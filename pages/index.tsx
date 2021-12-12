import Head from "next/head";
import History from "./history";
import "tailwindcss/tailwind.css";
import { getArticles } from "../firebase/setting";

export default function Home() {
  getArticles();

  return (
    <div className="relative bg-gray-100">
      <Head>
        <title>Waimensu</title>
        <meta name="description" content="wai history" />
      </Head>

      <main>
        <div className="container text-center mx-auto my-auto bg-white">
          <div className="row text-5xl mb-5">Waimensu</div>
          <hr />
          <History />
        </div>
      </main>
      <footer className="text-center">©️ 2021 waimensu</footer>
    </div>
  );
}
