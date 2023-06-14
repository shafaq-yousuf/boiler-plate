import { Box} from "@mui/material";
import React, { useState } from "react";
import MyInput from "../components/MyInput";
import Button from "../components/Button";
import { postFBdata } from "./firebaseMethods";

export const AddQuestions = () => {
  const [model, setModel] = useState({})
  const submitQuestion = () => {
    postFBdata("Questions", model).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    alert("Question Submitted")
  };
  return (
    <div className="text-center my-5">
      <Box>
        <Box item md={6}>
          <h2 className="my-3">Add Questions</h2>
          <MyInput placeholder="Add Question" className="my-3" onChange={(e)=>setModel({...model, Questions: e.target.value})}/>
          <Button
            label="Submit"
            className="contained my-2"
            onClick={submitQuestion}
          />
        </Box>
      </Box>
    </div>
  );
};
