
function writeCards(arrayName, event){
    let thankYouCards = []
    for (let i = 0; i < arrayName.length; i++) {
        thankYouCards.push(`Thank you, ${arrayName[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
    }



    
function countdown(countdown){
    while (countdown > 0){
        console.log(countdown);
        countdown -= 1;
     }
     console.log(countdown);
}