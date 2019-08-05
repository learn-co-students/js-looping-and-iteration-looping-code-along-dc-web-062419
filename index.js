// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"]
let messages = []

function writeCards(name, event) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

function countdown(num) {
    while (num >= 0) {console.log(num); num-- 
    }
    return num
}