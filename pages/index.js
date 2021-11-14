import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="relative bg-gray-400">
      <Head>
        <title>Wai history</title>
        <meta name="description" content="wai history" />
      </Head>
      <main>
        <h1>
          Wai history
        </h1>
      </main>
      <footer>
        ©️ 2021 waimensu
      </footer>
    </div>
  )
}
