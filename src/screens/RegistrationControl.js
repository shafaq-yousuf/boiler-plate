import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { SMSwitch } from "../components/SMSwitch";
import { fbCustomPost, fbGet } from "./firebaseMethods";

const RegistrationControl = () => {
  const [model, setModel] = useState({});
  const save = () => {
    model.courseList = [
      {
        sub: "eng",
      },
    ];
    fbCustomPost("RegControl", model)
      .then((res) => {
        console.log(model);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let GetDT = () => {
    fbGet("RegControl")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    GetDT();
  }, []);

  return (
    <>
      <Typography>Registration Control</Typography>
      <Box>
        <Box>
          <SMSwitch
            // onChange={(e) =>
            //   setModel({ ...model, registrationOpen: e.target.checked })
            // }
            onChange={(e) =>
              setModel({ ...model, registrationOpen: e.target.checked })
            }
            label="course open"
          />
        </Box>
        <Box>
          <Button onClick={save} className="contained" label="course open" />
        </Box>
      </Box>
    </>
  );
};
export default RegistrationControl;
