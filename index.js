// Code your solutions in this file
function countdown(number){
    let countdown = number;
    while (countdown > -1) {
    console.log(countdown--);
}
}

function writeCards(names, event){
    let cardResult = [];
    for(let i=0; i < names.length; i++){
       cardResult.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }  
    return cardResult
}