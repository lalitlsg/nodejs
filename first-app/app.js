const path = require("path");
const os = require("os");
const fs = require("fs");

const logger = require("./logger");

// logger.showName("Laslit");

//path module
let pathObj = path.parse(__filename);
// console.log(pathObj);

//os module
console.log(`${os.totalmem}, ${os.freemem}`);

//fs module
fs.readdir("./", (err, files) => {
  if (err) console.log("Error", err);
  else console.log("Files", files);
});
