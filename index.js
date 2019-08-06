//  for ([initialization]; [condition]; [iteration]) {
//        [loop body]
//  }
// ---------------------------------------------
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts
// }
//    wrapGifts(gifts);
// ---------------------------------------------
function writeCards(stringName, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < stringName.length; i++) {
        thankYouMessages.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}
// writeCards(stringName, eventName);

// ----------------------------------------
// while ([condition]) {
    //[loop body]
    // }
    
    
    
    // ---------------------------------------------
    
    function countdown(posInt) {
        let i = posInt;
        while (i >= 0) {
            console.log(i--);
        }
        return posInt;
}
    countdown();