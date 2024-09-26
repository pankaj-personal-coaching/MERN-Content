const http = require("http");
const cluster = require("cluster");
const os = require("os");
const noOfCpus = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master cluster with processId=${process.pid} is running!`);
  // Fork workers/child processes
  for (let i = 0; i < noOfCpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker with process id:${worker.process.pid} exited!`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("This is an example of clustering!");
    })
    .listen(3001);
  console.log(`Worker with Process ID: ${process.pid} started`);
}
