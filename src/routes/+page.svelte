<script>
    import { Calculator } from '$lib/utils'
    import Display from '$lib/components/Display.svelte';
    import Grid from '$lib/components/Grid.svelte'

    let calc = new Calculator

  
  
    let display = calc.getDisplay();


    const buttons = [
        {text: '1', action: () => calc.appendNumber('1')},
        {text: '2', action: () => calc.appendNumber('2')},
        {text: '3', action: () => calc.appendNumber('3')},
        {text: '+', action: () => calc.chooseOperator("+")},

        {text: '4', action: () => calc.appendNumber('4')},
        {text: '5', action: () => calc.appendNumber('5')},
        {text: '6', action: () => calc.appendNumber('6')},
        {text: '-', action: () => calc.chooseOperator("-")},

        {text: '1', action: () => calc.appendNumber('1')},
        {text: '1', action: () => calc.appendNumber('1')},
        {text: '1', action: () => calc.appendNumber('1')},
        {text: '*', action: () => calc.chooseOperator("*")},

        {text: 'C', action: () => calc.clear()},
        {text: '0', action: () => calc.appendNumber('0')},
        {text: '/', action: () => calc.chooseOperator("/")},

        {text: 'del', action: () => calc.delete()},
        {text: '=', action: () => calc.compute()}
    ];
    function handleButton(action) {
        action();
        display = calc.getDisplay();
    }
</script>
<h1>calc_0</h1>
<Display {display}></Display>
<Grid {buttons} onButtonClick={handleButton} />
