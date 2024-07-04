const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.cpus().length);

const cpus = os.cpus()

if(cluster.isMaster) {
    for (let i = 0; i < cpus.length - 2; i++) {
        cluster.fork()
      
    }

    cluster.on('exit', (worker) => {
        console.log(`Воркер с pid = ${worker.process.pid} умер`)
        cluster.fork()
    })
} else {
    console.log(`Воркер с pid = ${process.pid}`)

    setInterval(() => {
        console.log(`Воркер с pid= ${process.pid} ещё работает`)
    }, 5000)
}