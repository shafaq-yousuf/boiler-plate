import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyInput from "../components/MyInput";
import SMModal from "../components/SMModal";
import { Box } from "@mui/system";
import Button from "../components/Button";
import { postFBdata } from "./firebaseMethods";

export const InstituteForm = () => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({});
  const saveReview = (model) => {
    postFBdata("instForm", model)
      .then((res) => {
        console.log("posted");
      })
      .catch((err) => {
        console.log("error");
      });
    console.log(model);
  };
  return (
    <>
      <div className="container py-3">
        <div>
          <h1 className="fw-bold p-2">Institute Form</h1>
        </div>
        <div className="row">
          <div className="col-md-6 py-3">
            <input
             type="text"
              placeholder="Institute Name"
              className="rounded p-2 w-75 my-1"
              onChange={(e) => setModel({ ...model, instName: e.target.value })}
            />
            <input
             type="text"
              placeholder="Institute Short Name"
              className="rounded p-2 w-75 my-1"
              onClick={(e) => setModel({ ...model, shortName: e.target.value })}
            />
            {/* <input
              type="image"
              placeholder="Institute Logo"
              className="rounded p-2 w-75 my-1"
              onClick={(e) => setModel({ ...model, logo: e.target.value })}
            /> */}
            <input
              type="number"
              placeholder="No of Campus"
              className="rounded p-2 w-75 my-1"
              onChange={(e) =>
                setModel({ ...model, noOfCampus: e.target.value })
              }
            />
            <input
             type="text"
              placeholder="Campus Details"
              className="rounded p-2 w-75 my-1"
              onChange={(e) =>
                setModel({ ...model, campusDetail: e.target.value })
              }
            />
            <input
             type="text"
              placeholder="Location"
              className="rounded p-2 w-75 my-1"
              onChange={(e) => setModel({ ...model, location: e.target.value })}
            />
            <input
             type="text"
              placeholder="Address"
              className="rounded p-2 w-75 my-1"
              onChange={(e) => setModel({ ...model, address: e.target.value })}
            />
            <input
              type="number"
              placeholder="Contact"
              className="rounded p-2 w-75 my-1"
              onChange={(e) => setModel({ ...model, contact: e.target.value })}
            />
            <input
              type="number"
              placeholder="Owner Contact"
              className="rounded p-2 w-75 my-1"
              onChange={(e) =>
                setModel({ ...model, ownerCont: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Owner Email"
              className="rounded p-2 w-75 my-1"
              onChange={(e) =>
                setModel({ ...model, ownerEmail: e.target.value })
              }
            />
            <select
              className="rounded p-2 w-75 my-1"
              onChange={(e) =>
                setModel({ ...model, instType: e.target.value })
              }
            >
              <option>Institute Type</option>
              <option value="sch">School</option>
              <option value="college">College</option>
              <option value="uni">University</option>
              <option value="inst">Institute</option>
            </select>
            <button
              className="my-2 py-1 text-center text-dark bg-light rounded border-dark w-25 mx-2"
              onClick={() => saveReview(model)}
            >
              Submit
            </button>
            {/* <SMModal
                            title='Details Submitted'
                            // onClick={() => { setOpen(true) }}>Submit</button>
                            open={open}
                            close={(e) => setOpen(e)}/> */}
          </div>
        </div>
      </div>
    </>
  );
};
