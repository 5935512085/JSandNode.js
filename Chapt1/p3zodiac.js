// Grade Culculation
const prompt = require('prompt-sync')()

var fin = false
var message =''

do{
    var day= prompt(`Please insert the Day of birth(1-31) ex. 1 : >>.. `)
    var month= prompt(`Please insert the Month of birth(1-12) ex. 11 : >>.. `)
    day = parseInt(day)
    month = parseInt(month)

    if(day>=19 && month==4 ||day<=13 && month==5){
        message = ' Your Zodiac Sign is : Aries' 
    }else if(day>=14 && month==5 ||day<=19 && month==6){
        message = ' Your Zodiac Sign is : Taurus'  
    }else if(day>=20 && month==6 ||day<=20 && month==7){
        message = ' Your Zodiac Sign is : Gemini'  
    }else if(day>=21 && month==7 ||day<=9 && month==8){
        message = ' Your Zodiac Sign is : Cancer'  
    }else if(day>=10 && month==8 ||day<=15 && month==9){
        message = ' Your Zodiac Sign is : Leo'  
    }else if(day>=16 && month==9 ||day<=30 && month==10){
        message = ' Your Zodiac Sign is : Virgo'  
    }else if(day>=31 && month==10 ||day<=22 && month==11){
        message = ' Your Zodiac Sign is : Libra'  
    }else if(day>=23 && month==11 ||day<=29 && month==11){
        message = ' Your Zodiac Sign is : Scorpius'  
    }else if(day>=30 && month==11 ||day<=17 && month==12){
        message = ' Your Zodiac Sign is : Ophiuchus'  
    }else if(day>=18 && month==12 ||day<=18 && month==1){
        message = ' Your Zodiac Sign is : Sagittarius'  
    }else if(day>=19 && month==1 ||day<=15 && month==2){
        message = ' Your Zodiac Sign is : Crapiconus'  
    }else if(day>=16 && month==2 ||day<=11 && month==3){
        message = ' Your Zodiac Sign is : Aquarius'  
    }else if(day>=12 && month==3 ||day<=18 && month==4){
        message = ' Your Zodiac Sign is : Pisces'  
    }else {
        message = '-- Please insert only number --'
    }
    console.log(message + '\n')
    
    console.log('Finish Zodiac Sign calculation')
    fin = true
    

}while(!fin)