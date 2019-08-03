// Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], "birthday");
// Would produce the following array:

// [
//   "Thank you, Ada, for the wonderful birthday gift.",
//   "Thank you, Brendan, for the wonderful birthday gift.",
//   "Thank you, Ali, for the wonderful birthday gift."
// ];

function writeCards(names, event) {
    let holder = []
    for (let i = 0; i < names.length; i++) {
        holder.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return holder
}

function countdown(num) {
    while(num >= 0){
        console.log(num);
        num = num - 1;
    }

    
}






