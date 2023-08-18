//dns -> Domin name system

const dns = require(`dns`)

dns.lookup(`www.whatsapp.com`, function (err,addres,family){
    if (err) console.log(err)
    console.log(`address=`, addres)
    console.log(`family=`, family)

    //lookup service
    dns.lookupService(addres,22,function(err,host,service){
        if(err) console.log(err)
        console.log(`host=`, host)
    console.log(`service=`, service)
    })
})


// address= 157.240.23.53
// family= 4
// host= whatsapp-cdn-shv-01-maa2.fbcdn.net
// service= ssh -> (secver soket head)