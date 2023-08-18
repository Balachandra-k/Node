const {colors,products} = require(`./data/array`)


colors.forEach(item =>{
    console.log('item=',item);
})

products.forEach((item,key) =>{
    console.log(`id=`,item.id)
    console.log(`title=`,item.title)
    console.log(`price=`,item.price)
    console.log(`Qty=`,item.qnty)
    console.log(`desc=`,item.desc)
})