import { useState } from 'react';

const StudentAge = () =>{

  const [isShowEachAge, setIsShowEachAge] = useState(false)

const onStudentAgeHandler = () =>{
  setIsShowEachAge(!isShowEachAge)
}

const onClickElementSchoolAge = () =>{
    console.log("小学生")
}

const onClickJuniorHighAge = () =>{
    console.log("中学生")
}

return(
  <>
　  <div onClick={onStudentAgeHandler}>学生時代</div>
      {isShowEachAge && 
        <div>
          <div>
            <button type="button" onClick={onClickElementSchoolAge}>小学生時代</button>
          </div>
          <div>
            <button type="button" onClick={onClickJuniorHighAge}>中学生時代</button>
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
      }
  </>
    )
}
export default StudentAge