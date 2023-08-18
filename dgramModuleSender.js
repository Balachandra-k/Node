//dgram

//sender

const dgram =  require(`dgram`)

const soket = dgram.createSocket(`udp4`)

let msg = Buffer.from(`welcome to node js Dgram example`)

soket.send(msg,4000,'localhost')

console.log('data succefully sent through the soket recive data @ port4000') 