// dgram

//its useqd for soket commnication through UDP(user datagram protocal)
//UDP4 - ipv4 UDP6 - ipv6

//listerner

const dgram = require(`dgram`)

const socket = dgram.createSocket('udp4')

//node event - method (name, callback , listener)

socket.on('message', function(msg,err){
    if(err)console.log(err)
    console.log('message=', msg.toString())

})
socket.bind(4000)