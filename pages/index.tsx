import Head from 'next/head';
import History from './history';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getArticles, addComment } from '../firebase/setting';
import { useState } from 'react';

import { useTheme, Text } from '@nextui-org/react';

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
      <div>ワイメンスとは？</div>
    </>
  );
};

const Home = () => {
  const { theme } = useTheme();

  // getArticles();

  const [tabValue, setTabValue] = useState<string | null>(null);

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

      <main>
        <div>hoge</div>
        {/* <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register('userName')} />
          <input type="submit" />
        </form> */}
      </main>
      <footer className="text-center">©️ 2021 waimensu</footer>
    </>
  );
};

export default Home;
