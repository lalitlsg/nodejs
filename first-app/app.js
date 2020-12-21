const path = require("path");
const os = require("os");
const fs = require("fs");
const http = require("http");
const Logger = require("./logger");

// logger.showName("Laslit");

//path module
let pathObj = path.parse(__filename);
// console.log(pathObj);

//os module
console.log(`${os.totalmem}, ${os.freemem}`);

//fs module
// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error", err);
//   else console.log("Files", files);
// });

//event module
// const emitter = new EventEmitter();
// emitter.on("messageLogged", arg => {
//   console.log("Message Logged", arg);
// });
// emitter.emit("messageLogged", { id: 1, name: "Lalit" });

const logger = new Logger();
logger.on("messageLogged", arg => {
  console.log("Message Logged", arg);
});
logger.showName("Lalit");

//http module
const server = http.createServer();

server.on("connection", socket => {
  console.log("Connected...");
});

server.listen(3000);
console.log("Listening on 3000");
