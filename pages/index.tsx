import Head from 'next/head';
import History from './history';
import 'tailwindcss/tailwind.css';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getArticles, addComment } from '../firebase/setting';
import { useState } from 'react';

type Inputs = {
  userName: string;
  commentContent: string;
};

const Home = () => {
  getArticles();

  const [tabValue, setTabValue] = useState<string | null>(null);

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

  const changeTabHandler = (menu: string) => {
    setTabValue(menu);
  };

  return (
    <>
      <Head>
        <title>Waimensu</title>
        <meta name="description" content="wai history" />
      </Head>

      <main>
        <div className="container text-center mx-auto my-auto">
          <div className="row text-5xl mb-5">ワイメンス</div>
          <ul className="flex border-b">
            <li className="-mb-px mr-1">
              <button
                className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                onClick={() => {
                  changeTabHandler('Home');
                }}
              >
                Home
              </button>
            </li>
            <li className="mr-1">
              <button
                className="bg-white inline-block py-2 px-4 text-green-500 hover:text-blue-800 font-semibold"
                onClick={() => {
                  changeTabHandler('Biography');
                }}
              >
                Biography
              </button>
            </li>
            <li className="mr-1">
              <button
                className="bg-white inline-block py-2 px-4 text-yellow-700 hover:text-blue-800 font-semibold"
                onClick={() => {
                  changeTabHandler('WaiHabits');
                }}
              >
                ワイ習慣
              </button>
            </li>
            <li className="mr-1">
              <button
                className="bg-white inline-block py-2 px-4 text-red-600 font-semibold"
                onClick={() => {
                  changeTabHandler('WaiLog');
                }}
              >
                ワイ log
              </button>
            </li>
            <li className="mr-1">
              <button
                className="bg-white inline-block py-2 px-4 text-purple-800 font-semibold"
                onClick={() => {
                  changeTabHandler('WaiAbility');
                }}
              >
                ワイアビリティ
              </button>
            </li>
          </ul>
          {tabValue == 'Home' && <></>}
          {tabValue == 'Biography' && <History />}
          {/* {tabValue == 'Habits' && <WaiHabits />}
          {tabValue == 'log' && <WaiLog />}
          {tabValue == 'ability' && <WaiAbility />} */}
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
