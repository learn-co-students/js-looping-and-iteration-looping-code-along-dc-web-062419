// Code your solutions in this file


function writeCards(arrNames, eventName) {
    let newArray = []

    for (let i = 0; i < arrNames.length; i++){
      newArray.push(`Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`);
    }
return newArray;
}

function countdown(number){
    while (number >= 0){
        console.log(number)
        number--
    }
}