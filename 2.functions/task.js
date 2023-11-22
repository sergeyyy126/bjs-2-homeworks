function getArrayParams(...arr) {
  return {
    min: Math.min(...arr), 
    max: Math.max(...arr), 
    avg: Number((arr.reduce((acc, number) => acc + number, 0) / arr.length).toFixed(2))
  }
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, number) => acc + number, 0);
}

function differenceMaxMinWorker(...arr) {
   return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}

// function differenceEvenOddWorker(...arr) {
//  //вариант решения № 2
// //   const sumOfEvenNumber = arr.filter(number => number % 2 === 0).reduce((acc, number) => acc + number, 0);
// //   const sumOfOddNumber = arr.filter(number => number % 2 !== 0).reduce((acc, number) => acc + number, 0);

// //   return sumOfEvenNumber - sumOfOddNumber;
// // }

function differenceEvenOddWorker(...arr) {
  const reduceResult = arr.reduce((acc, number) => {
    return number % 2 === 0 ? {even: acc.even + number, odd: acc.odd} : {even: acc.even, odd: acc.odd + number};
  }, {even: 0, odd: 0});

  return reduceResult.even - reduceResult.odd;
}

function averageEvenElementsWorker(...arr) {
  const reduceResult = arr.reduce((acc, number) => {
    return number % 2 === 0 ? {even: acc.even + number, count: acc.count + 1} : acc;
  }, {even: 0, count: 0});

  return arr.length === 0 ? 0 : reduceResult.even / reduceResult.count;
}

function makeWork(arrOfArr, func) {  
return Math.max(...arrOfArr.map(array => func(...array)));
}
