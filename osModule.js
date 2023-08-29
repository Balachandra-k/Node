//os Module => operiting system module its get data of my system

const os = require ('os')

const user = os.userInfo()
console.log('user info =', user)

//uptime

console.log('uptime=', os.uptime());

const curros ={
    name:os.type(),
    release : os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    arch:os.arch(),
    CPU:os.cpus(),
    avgload: os.loadavg(),

}
console.log("over all=",curros);