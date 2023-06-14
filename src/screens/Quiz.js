import React, { useEffect, useState } from "react";
import { getFBdata } from "./firebaseMethods";

export const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const showQuiz = () => {
    getFBdata("quiz")
      .then((res) => {
        console.log(res);
        setQuiz([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(showQuiz(), []);
  return (
    <>
      <h1>Quiz</h1>
      <button onClick={showQuiz}>show</button>
      {/* <h3>
        {quiz.map((e, i) => (
          <h3>Q: {e.ques}</h3>
        ))}
      </h3> */}
      {quiz.map((e, i) => (
        <>
          <h3>{e.ques}</h3>
          <div>
            <p>{e.opt1}</p>
            <p>{e.opt2}</p>
          </div>
          <div>
            <p>{e.opt3}</p>
            <p>{e.opt4}</p>
          </div>
        </>
      ))}
    </>
  );
};
