import { Box} from "@mui/material";
import React, { useState } from "react";
import MyInput from "../components/MyInput";
import Button from "../components/Button";
import { postFBdata } from "./firebaseMethods";

export const AddAnswers = () => {
  const [model, setModel] = useState({})
  const submitAnswer = () => {
    postFBdata("Answers", model).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    alert("Question Submitted")
  };
  return (
    <div className="text-center my-5">
      <Box>
        <Box item md={6}>
          <h2 className="my-3">Add Answers</h2>
          <MyInput placeholder="Add Answers" className="my-3" onChange={(e)=>setModel({...model, Answers: e.target.value})}/>
          <Button
            label="Submit"
            className="contained my-2"
            onClick={submitAnswer}
          />
        </Box>
      </Box>
    </div>
  );
};
