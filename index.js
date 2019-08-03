// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gift} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    var array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countdown(num) {
    let countdown = num;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}