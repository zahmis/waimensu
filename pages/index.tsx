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
    <div className="relative bg-gray-100 bg-pattern">
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
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register('userName')} />
          <input type="submit" />
        </form>
      </main>
      <footer className="text-center">©️ 2021 waimensu</footer>
    </div>
  );
};

export default Home;
