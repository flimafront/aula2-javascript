// function sum(a, b) {
// 	return a + b;
// }

// export const sub = (a, b) => a - b;

// const mult = (a, b) => a * b;

// const div = (a, b) => a / b;

// export { mult as multiplicacao, div }

// export default sum;

//Sempre só pode haver 1 export defaut por arquivo, os outros export pode ter varios


class Calculator {
	constructor() {

	}

	sum(a, b) {
		return a + b;
	}

	sub(a, b) {
		return a - b;
	}

	mult(a, b) {
		return a * b;
	}

	div(a, b) {
		return a / b;
	}

}

export default Calculator;