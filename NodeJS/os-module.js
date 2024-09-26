const os = require("os");
const totalCpus = os.cpus();
console.log(totalCpus.length);

const arch = os.arch();
console.log(arch);

const freeMemoryCheck = os.freemem();
console.log(freeMemoryCheck / 1024 / 1024);

const hostname = os.hostname();
console.log(hostname);

const type = os.type();
console.log(type);
