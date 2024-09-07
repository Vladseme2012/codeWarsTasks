// 1.Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
  const initialValue = 0;
  const resultSumSquare = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue ** 2,
    initialValue,
  );
  return resultSumSquare;
  }

  squareSum([0, 3, 4, 5]) // return 50;

// Time: 817ms Passed: 41Failed: 0