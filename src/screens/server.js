// import fs from fs

const fs = require("fs");

fs.readdir("./", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});
