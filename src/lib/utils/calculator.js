export default class Calculator {
    constructor() {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
    }

    appendNumber(number) {
        if (number === '.' && this.currentInput.includes('.')) return;
        this.currentInput += number;
    }

    chooseOperator(operator) {
        if(this.currentInput === '') return
        if(this.previousInput !== '') {
            this.compute()
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
            case '+' :
                result = prev + curr;
                break;
            case '-' :
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/' :
                result =prev / curr;
                break;
            default:
                return;
        }
        this.currentInput = result.toString();
        this.operator = null;
        this.previousInput = '';
    }

    clear() {
        this.currentInput = '0';
        this.previousInput + '';
        this.operator = null;
        this.getDisplay()
    }

    delete() {
        // delete -5 deletes 5 only
        this.currentInput = this.currentInput.slice(0, -1);
    }

    getDisplay() {
        return (this.currentInput || this.previousInput || '0').toString()
    }

    getOperator(){
        return this.operator || null
    }
}