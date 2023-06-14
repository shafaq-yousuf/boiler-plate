import React, { useState } from "react";
import { getFBdata } from "./firebaseMethods";
import { Box } from "@mui/material";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export const UlmaScreen = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  getFBdata("Questions")
    .then((res) => {
      setList([...res]);
    })
    .catch((err) => {
      console.log(err);
    });
  const answerQues = () => {
    navigate("addAns");
  };
  return (
    <>
      <Box>
        <Box item md={6}>
          <h1 className="my-4">Questions by Viewers</h1>
          {list.map((e, i) => (
            <div>
              <h3 className="my-2">Q: {e.Questions}</h3>
              <Button className="contained" label="Ans" onClick={answerQues} />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};
