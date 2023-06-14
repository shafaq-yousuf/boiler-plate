import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { AddQuestions } from "./AddQuestions";
import { getFBdata } from "./firebaseMethods";

export const UserScreen = () => {
  const [list, setList] = useState([]);
  const [quesNo, setQuesNo] = useState(0);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const addQuestion = () => {
    navigate("addQues");
  };
  const getQuestion = () => {
    getFBdata("Questions")
      .then((res) => {
        setList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => getQuestion, []);
  return (
    <>
      <div>
        <Box>
          <Box item md={6}>
            <h1 className="my-3">Questions To Scholars</h1>
            <Typography>
              <h4>
                <span>
                  {list.map((e, i) => (
                    <h3>Q: {e.Questions}</h3>
                  ))}
                </span>
              </h4>
            </Typography>
            <Button
              label="Add Question"
              className="contained"
              onClick={addQuestion}
            />
          </Box>
        </Box>
      </div>
    </>
  );
};
