// Code your solutions in this file
const people = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise"

function writeCards(people, event) {
    let thankYou = []
    for (let i = 0; i < people.length; i++) {
      thankYou.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
   return thankYou  
}

function countdown(integer) {
    while (integer > 0) {
      console.log(integer);
      integer -= 1;
    }
    console.log(integer);
  }