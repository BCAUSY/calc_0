export default class Calculator {
	constructor() {
		this.currentInput = '0';
		this.previousInput = '';
		this.operator = null;
		this.memory = [];
	}

	appendNumber(number) {
		if (this.currentInput === '0') return (this.currentInput = '');
		if (number === '.' && this.currentInput.includes('.')) return;
		this.currentInput += number;
	}

	chooseOperator(operator) {
		if (this.currentInput === '') return;
		if (this.currentInput === '0') {
			this.clear();
			this.getDisplay();
			this.currentInput = '';
			this.appendNumber('-');
		}

		if (this.previousInput !== '') {
			this.compute();
		}
		this.operator = operator;

		this.previousInput = this.currentInput;
		this.currentInput = '';
	}

	compute() {
		const prev = parseFloat(this.previousInput);
		const curr = parseFloat(this.currentInput);
		if (isNaN(prev) || isNaN(curr)) return;

		let result;
		switch (this.operator) {
			case '+':
				result = prev + curr;
				break;
			case '-':
				result = prev - curr;
				break;
			case '*':
				result = prev * curr;
				break;
			case '/':
				result = prev / curr;
				break;
			default:
				return;
		}
		let operator = this.operator;

		let saveResult = { prev, operator, curr, result };

		if (this.memory.length < 10) {
			this.memory.push(saveResult);
		} else {
			this.memory.shift();
			this.memory.push(saveResult);
		}

		this.currentInput = result.toString();
		this.operator = null;
		this.previousInput = '';
	}

	getMemory() {
		return this.memory;
	}

	clear() {
		this.currentInput = '0';
		this.previousInput + '';
		this.operator = null;
		this.appendNumber("0")
		this.getDisplay();
	}

	delete() {
		if (this.currentInput.charAt(0) === '-') {
			this.currentInput = this.currentInput.slice(0, -2);
		} else {
			this.currentInput = this.currentInput.slice(0, -1);
		}
	}

	getDisplay() {
		return (this.currentInput || this.previousInput || '0');
	}

	getOperator() {
		return this.operator || null;
	}
	
}
