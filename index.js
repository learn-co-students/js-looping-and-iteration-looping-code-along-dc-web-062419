function writeCards(recipients, occasion) {
  const thankYous = [];
  for (let i=0; i < recipients.length; i++) {
    thankYous.push(`Thank you, ${recipients[i]}, for the wonderful ${occasion} gift!`);
  }
  return thankYous;
}

function countdown(num) {
  let i = num;
  while (i >=0) {
    console.log(i--);
  }
}
