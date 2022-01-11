// Grade Culculation
const prompt = require('prompt-sync')()

var fin = false
var message =''

do{
    console.log('===== Area Calculation =====')
    console.log('(1) Rectangle Area Calculate')
    console.log('(2) Triangle Area Calculate')
    console.log('(3) Circle Area Calculate')
    var choise= prompt(`Please insert Choise Number : >>.. `)
    choise = parseInt(choise)
    if(choise ==1){
        console.log('=== Rectangle Area Calculate ===')
        var width = prompt(`Please insert width : >>.. `)
        var higth = prompt(`Please insert higth : >>.. `)
        width= parseFloat(width)
        higth= parseFloat(higth)
        console.log('This Rectangle Area is : '+width*higth)
    }else if(choise ==2){
        console.log('=== Triangle Area Calculate ===')
        var base = prompt(`Please insert base: >>.. `)
        var hight = prompt(`Please insert higth : >>.. `)
        base= parseFloat(base)
        hight= parseFloat(hight)
        console.log('This Triangle  Area is : '+ 0.5*base*hight)
    }else if(choise ==3){
        console.log('=== Circle Area Calculate ===')
        var radius = prompt(`Please insert radius: >>.. `)
        radius= parseFloat(radius)
        console.log('This Circle Area is : '+ 3.14*radius*radius)
    }else{
        message = '-- Please insert only number (1-3) --'
    }
    console.log(message + '\n')
    
    console.log('Finish Area calculation')
    fin = true
    

}while(!fin)