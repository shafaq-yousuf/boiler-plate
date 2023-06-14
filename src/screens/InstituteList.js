import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { getFBdata } from "./firebaseMethods";

export const InstituteList = () => {
  const [form, setForm] = useState([]);

  const showForm = () => {
    getFBdata("instForm")
      .then((res) => {
        console.log(res);
        setForm([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   useEffect(showForm(), []);
  let col = [
    {
      displayName: "Address",
      key: "address",
    },
    {
      displayName: "Campus Detail",
      key: "campusDetail",
    },
    {
      displayName: "Contact",
      key: "contact",
    },
    {
      displayName: "Location",
      key: "location",
    },
  ];
  return (
    <>
    <button onClick={showForm}>save</button>
    <Table className="table-stripped" title="List Of Institute" dataSource={form} col={col} />
    </>
  );
};
