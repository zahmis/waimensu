import Head from 'next/head';
import History from './history';
import 'tailwindcss/tailwind.css';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getArticles, addComment } from '../firebase/setting';

type Inputs = {
  userName: string;
  commentContent: string;
};

const Home = () => {
  getArticles();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    await addComment(data);
  };
  console.log(watch('userName'));

  return (
    <>
      <Head>
        <title>Waimensu</title>
        <meta name="description" content="wai history" />
      </Head>

      <main>
        <div className="container text-center mx-auto my-auto">
          <div className="row text-5xl mb-5">Waimensu</div>
          <hr />
          <ul className="flex border-b">
            <li className="-mb-px mr-1">
              <a
                className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                href="#"
              >
                Biography
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                href="#"
              >
                ワイ習慣
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
                href="#"
              >
                ワイトレ
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
                href="#"
              >
                ワイアビリティ
              </a>
            </li>
          </ul>
          <History />
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register('userName')} />
          <input type="submit" />
        </form>
      </main>
      <footer className="text-center">©️ 2021 waimensu</footer>
    </>
  );
};

export default Home;
