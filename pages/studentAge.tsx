import { useState } from 'react';

const StudentAge = () => {
  const [isShowEachAge, setIsShowEachAge] = useState(false);

  const onStudentAgeHandler = () => {
    setIsShowEachAge(!isShowEachAge);
  };

  const onClickElementAge = () => {
    console.log('小学生');
  };

  const onClickJuniorHighAge = () => {
    console.log('中学生');
  };

  return (
    <>
      　{' '}
      <div className="" onClick={onStudentAgeHandler}>
        学生時代
      </div>
      {isShowEachAge && (
        <div>
          <div>
            <button
              className="w-full h-10 px-5 m-2 text-indigo-200 translation-colors duration-150 bg-indigo-700 round-lg focus:shadow-outline hover:bg-indigo-800"
              type="button"
              onClick={onClickElementAge}
            >
              小学生時代
            </button>
          </div>
          <div>
            <button type="button" onClick={onClickJuniorHighAge}>
              中学生時代
            </button>
          </div>
          <div>
            <button>高校生時代</button>
          </div>
          <div>
            <button>バイト時代</button>
          </div>
          <div>
            <button>浪人時代</button>
          </div>
          <div>
            <button>大学時代</button>
          </div>
          <div>
            <button>大学院時代</button>
          </div>
        </div>
      )}
    </>
  );
};
export default StudentAge;
