function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  const avg = Number((sum / arr.length).toFixed(2));
  return {
    min: min, 
    max: max, 
    avg: avg,
  }
}
console.log(getArrayParams(-356, 1111, 99, 777));

function summElementsWorker(...arr) {
  if (arr.length === 0) {
		return 0;
	}

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
   return sum;
}
console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
		return 0;
	}

  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return max - min;   
}
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = arr[0];
  let sumOddElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker(1, 2, 1, 1)); 
console.log(differenceEvenOddWorker(1, 2)); 

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
		return 0;
	}

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }
  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); 
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker)); 
