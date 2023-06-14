import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fbGet } from "./firebaseMethods";

const Registration = () => {
  const [loader, setLoader] = useState(false);
  const [RegStatus, setRegStatus] = useState({
    registrationOpen: true,
  });

  const getStatus = () => {
    setLoader(true);
    fbGet("RegControl")
      .then((res) => {
        setLoader(false);
        console.log(res);
        setRegStatus({ ...res });
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return loader ? (
    <Typography>Loading...</Typography>
  ) : RegStatus.registrationOpen ? (
    <Typography>Registration</Typography>
  ) : (
    <Typography>No Form Found</Typography>
  );
};
export default Registration;
