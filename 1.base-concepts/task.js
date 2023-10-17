"use strict"

// Задача 1
function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let d = b ** 2 - 4 * a * c;

  	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	}
	return arr;
}

console.log(solveEquation(1, 5, 4));

// Задача 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let payment = loanBody * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
	let totalPayment = payment * countMonths;
	let roundedTotalPayment = totalPayment.toFixed(2);
	return Number(roundedTotalPayment);
}

console.log(calculateTotalMortgage(8, 230, 3700, 11));
