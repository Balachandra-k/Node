//cluster module
//node is single threaded - will allow to excute the one app/ cmd at a time

//is master -> true single thred
//is Worker -> true multi thred -> fork()
// fork() method convert single to multi thred 

const cluster = require('cluster')

if(cluster.isMaster){
    console.log(`node isrunning in single thred`)

}else {
    console.log(`no action`)
}