// Code your solutions in this file

function writeCards(array, eventName) {
    let new_array = []
    for (let i=0; i<array.length; i++) {
      new_array.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return new_array
}

function countdown(num) {
    while (num > -1) {
        console.log(num--);
    }
}