const writeCards = (arr, msg) => {
  let array = [];
  arr.forEach(name => {
    array.push(`Thank you, ${name}, for the wonderful ${msg} gift!`);
  });
  return array;
};

const countdown = num => {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i -= 1;
  }
};

console.log(writeCards(['Ada', 'Brendan', 'Ali'], 'birthday'));
