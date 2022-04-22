// Grade Culculation
const prompt = require('prompt-sync')()

var fin = false
var count = 0
var gradeNum
var message =''
var subjects = new Array('English','Math','Sciene')
var input = ''

do{
    input = prompt(`Subject ${count} : \"${subjects[count]} \" Please insert the score >> `)
    gradeNum = parseInt(input)
    if(gradeNum>=80){
        message = ' Your grade is :   A'
    } else if (gradeNum>=70 && gradeNum<80){
        message = ' Your grade is :   B'
    }else if (gradeNum>=60 && gradeNum<70){
        message = ' Your grade is :   C'
    }else if (gradeNum>=50 && gradeNum<60){
        message = ' Your grade is :   D'
    } else if (gradeNum<50){
        message = ' Your grade is :   E'
    } 
     else {
        message = 'Please insert number 0-100'
    }
    console.log(message + '\n')
    if(count == subjects.length-1){
        console.log('Finish grade calculation')
        fin = true
        break
    }
    count ++

}while(!fin)