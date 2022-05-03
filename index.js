function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;
    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;
    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
 create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
  for the current number, 
    identify a complementary number that adds to our target
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object
if we reach the end of the array, return false
*/

/*
  make a hasTargetSum function that checks 
  if two numbers in an array add up to some target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
