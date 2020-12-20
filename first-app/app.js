const path = require("path");

const logger = require("./logger");

// logger.showName("Laslit");

//path module
let pathObj = path.parse(__filename);
console.log(pathObj);
