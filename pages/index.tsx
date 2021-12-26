import Head from 'next/head';
import History from './history';
import WaiLog from './wailog';
import WaiHabits from './waihabits';
import 'tailwindcss/tailwind.css';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getArticles, addComment } from '../firebase/setting';
import { useState } from 'react';

type Inputs = {
  userName: string;
  commentContent: string;
};

enum Tab {
  HOME = 'Home',
  BIO = 'Bio',
  HAB = 'WaiHabits',
  LOG = 'WaiLog',
  ABI = 'WaiAbility',
}

const HomeContents = () => {
  return (
    <>
      <div> Waimensu とは？</div>
      <div>「ワイ」達が集う場所である</div>
    </>
  );
};

const Home = () => {
  // getArticles();

  const [tabValue, setTabValue] = useState<string>(Tab.HOME);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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

      <div className="flex flex-col h-screen justify-between">
        <header className="h-10 text-center text-4xl border-b-2 mb-2">Waimensu</header>
        <main className="mb-auto h-10 ">
          <div className="container text-center mx-auto my-auto ">
            <ul className="flex justify-center">
              <li className={`${tabValue == Tab.HOME && 'border-b-4 border-indigo-700 '}  -mb-px mr-1 `}>
                <button
                  className="inline-block py-2 px-4 text-blue-800 font-semibold"
                  onClick={() => {
                    changeTabHandler('Home');
                  }}
                >
                  Home
                </button>
              </li>
              <li className={`${tabValue == Tab.BIO && 'border-b-4 border-indigo-700'} -mb-px mr-1 `}>
                <button
                  className=" inline-block py-2 px-4 text-green-500 font-semibold"
                  onClick={() => {
                    changeTabHandler('Bio');
                  }}
                >
                  Biography
                </button>
              </li>
              <li className={`${tabValue == Tab.HAB && 'border-b-4 border-indigo-700'} -mb-px mr-1 `}>
                <button
                  className=" inline-block py-2 px-4 text-yellow-700 font-semibold"
                  onClick={() => {
                    changeTabHandler('WaiHabits');
                  }}
                >
                  ワイ習慣
                </button>
              </li>
              <li className={`${tabValue == Tab.LOG && 'border-b-4 border-indigo-700'} -mb-px mr-1 `}>
                <button
                  className="inline-block rounded-t py-2 px-4 text-blue-700 font-semibold"
                  onClick={() => {
                    changeTabHandler('WaiLog');
                  }}
                >
                  ワイ log
                </button>
              </li>
              <li className={`${tabValue == Tab.ABI && 'border-b-4 border-indigo-700'} -mb-px mr-1 `}>
                <button
                  className="inline-block py-2 px-4 text-blue-700 font-semibold"
                  onClick={() => {
                    changeTabHandler('WaiAbility');
                  }}
                >
                  ワイアビリティ
                </button>
              </li>
            </ul>
            {tabValue == Tab.HOME && <HomeContents />}
            {tabValue == Tab.BIO && <History />}
            {tabValue == Tab.HAB && <WaiHabits />}
            {tabValue == Tab.LOG && <WaiLog />}
            {/* {tabValue == 'ability' && <WaiAbility />} */}
          </div>

          {/* <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register('userName')} />
          <input type="submit" />
        </form> */}
        </main>
        <footer className="text-center bg-gray-50">
          <div> ©️ 2021 waimensu</div>
          {/* <div>
            <a
              href="https://twitter.com/sizmaYosimaz"
              className="twitter-follow-button"
              // data-lang="ja"
              data-show-count="false"
            ></a>
            <script async src="https://platform.twitter.com/widgets.js"></script>
          </div> */}
        </footer>
      </div>
    </>
  );
};

export default Home;
