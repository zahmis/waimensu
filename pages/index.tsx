import Head from 'next/head';
import History from './history';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getArticles, addComment } from '../firebase/setting';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useTheme, Text } from '@nextui-org/react';
import { Article } from './models/Article';

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

  const [article, setArticle] = useState<Article>();

  const fetch = async () => {
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    const data = await axios.get('http://localhost:3000/article');
    setArticle(new Article(data.data.id, data.data.title));
  };
  console.log(article);

  // getArticles();
  useEffect(() => {
    fetch();
  }, []);

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
