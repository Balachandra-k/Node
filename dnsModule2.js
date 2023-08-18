const dns = require(`dns`)

dns.resolve4(`www.google.com`,(err,data)=> {
    if(err) console.log(err)
    data.forEach(item =>{
        dns.reverse(item,(err,host)=>{
            if(err) console.log(err)
            console.log(`reverse dns = , ${item},: ${JSON.stringify(host)}`)
        })
    })
})
dns.resolve6(`www.google.com`,(err,data)=> {
    if(err) console.log(err)
    data.forEach(item =>{
        dns.reverse(item,(err,host)=>{
            if(err) console.log(err)
            console.log(`reverse dns = , ${item},: ${JSON.stringify(host)}`)
        })
    })
})

// reverse dns = , 172.217.160.132,: ["maa03s29-in-f4.1e100.net"] -> resolve4 
// reverse dns = , 2404:6800:4007:80a::2004,: ["maa03s29-in-x04.1e100.net"] -> resolve6