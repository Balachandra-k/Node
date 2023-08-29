const fs= require('fs')

//async method
console.log('write operation started')

//async read f1 
fs.readFile('./content/file/p1.txt','utf-8',(err,res1) => {
    if(err) console.log(err)
    const first = res1;

    //async read f2

    fs.readFile('./content/file/p2.txt','utf-8',(err,res2) => {
        if(err) console.log();
        const sec = res2

        //write file
        fs.writeFile('./content/file/res-async.txt',`here is your async result: \n${first} \n\n${sec}`, (err,res)=>{
            if (err) console.log(err)
            console.log('write operation completed')
        })
    })
})