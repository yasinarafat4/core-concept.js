const numbers = [45, 65, 23, 98, 19];

//Previous
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//Simplified
for (const number of numbers) {
  //   console.log(number);
}

function compare(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}

const result = compare(15, "15");

console.log(result);

function compare(a, b) {
  if (a.toString() === b) {
    return true;
  } else {
    return false;
  }
}

// const result = compare(25, 25);

// console.log(result);
