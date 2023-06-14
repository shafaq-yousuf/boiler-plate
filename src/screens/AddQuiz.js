import React, { useState } from "react";
import { postFBdata } from "./firebaseMethods";

export const AddQuiz = () => {
  const [model, setModel] = useState([]);
  const saveQuiz = (model) => {
    postFBdata("quiz", model)
    .then((res) => {
      console.log("posted");
    })
    .catch((err) => {
      console.log("error");
    });
  };
  return (
    <>
      <h1>Add quiz</h1>
      <input
        type="name"
        placeholder="Add Question"
        className="rounded p-2 w-75 my-1"
        onChange={(e) => setModel({ ...model, ques: e.target.value })}
      />
      <input
        type="name"
        placeholder="Add option1"
        className="rounded p-2 w-75 my-1"
        onChange={(e) => setModel({ ...model, opt1: e.target.value })}
      />
      <input
        type="name"
        placeholder="Add option2"
        className="rounded p-2 w-75 my-1"
        onChange={(e) => setModel({ ...model, opt2: e.target.value })}
      />
      <input
        type="name"
        placeholder="Add option3"
        className="rounded p-2 w-75 my-1"
        onChange={(e) => setModel({ ...model, opt3: e.target.value })}
      />
      <input
        type="name"
        placeholder="Add option4"
        className="rounded p-2 w-75 my-1"
        onChange={(e) => setModel({ ...model, opt4: e.target.value })}
      />
      <input
        type="name"
        placeholder="Add Answer"
        className="rounded p-2 w-75 my-1"
        onChange={(e) => setModel({ ...model, ans: e.target.value })}
      />
      <button onClick={(e) => saveQuiz(model)}>submit</button>
    </>
  );
};
