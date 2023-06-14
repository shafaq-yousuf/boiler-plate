import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import SMModal from "../components/SMModal";
import { getFBdata, postFBdata } from "./firebaseMethods";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Grid } from "@mui/material";
import Table from "../components/Table";

const Course = () => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({});
  const [courseData, setCourseData] = useState([]);

  useEffect(() => showNewCourse, []);
  
  const saveNewCourse = (model) => {
    postFBdata("Courses", model)
      .then((res) => {
        console.log("posted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showNewCourse = () => {
    getFBdata("Courses")
      .then((res) => {
        console.log("fetch");
        setCourseData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(courseData);
  };

  let col = [
    {
      displayName: "Course Name",
      key: "name",
    },
    {
      displayName: "Duration",
      key: "duration",
    },
    {
      displayName: "Teacher Name",
      key: "teacherName",
    },
    {
      displayName: "Fees",
      key: "fees",
    },
  ];

  return (
    <>
      <Box>
        <h3>Courses:</h3>
        <p>We are here to provide best quality education to your child</p>
      </Box>
      <Box>
        <Grid>
          <Table dataSource={courseData} col={col} />
        </Grid>
      </Box>
      <Button
        label="Add Courses"
        className="contained py-2 my-3"
        onClick={() => {
          setOpen(true);
        }}
      />
      <SMModal
        title="Add New Course"
        open={open}
        close={(e) => setOpen(e)}
        innerContent={
          <Box>
            <input
              type="name"
              placeholder="Course Name"
              className="rounded p-2 w-75 my-1"
              onChange={(e) => setModel({ ...model, name: e.target.value })}
            />
            <input
              type="name"
              placeholder="Duration"
              className="rounded p-2 w-75 my-1"
              onChange={(e) => setModel({ ...model, duration: e.target.value })}
            />
            <input
              type="number"
              placeholder="Fees"
              className="rounded p-2 w-75 my-1"
              onChange={(e) => setModel({ ...model, fees: e.target.value })}
            />
            <input
              type="name"
              placeholder="Teacher Name"
              className="rounded p-2 w-75 my-1"
              onChange={(e) =>
                setModel({ ...model, teacherName: e.target.value })
              }
            />
          </Box>
        }
        modalFooter={
          <Box>
            <Button
              startIcon={<SaveAltIcon />}
              className="rounded p-2 w-75 my-1"
              label="Save"
              onClick={() => saveNewCourse(model)}
            />
          </Box>
        }
      />
    </>
  );
};
export default Course;
