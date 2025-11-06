<script>
    import { Calculator } from '$lib/utils'
    import Display from '$lib/components/Display.svelte';
    import Grid from '$lib/components/Grid.svelte'

    let calc = new Calculator();

  
  
    let display = calc.getDisplay();


    const buttons = [
        {text: '1', type: 'num', action: () => calc.appendNumber('1')},
        {text: '2', type: 'num', action: () => calc.appendNumber('2')},
        {text: '3', type: 'num', action: () => calc.appendNumber('3')},
        {text: '+', type: 'operator', action: () => calc.chooseOperator("+")},

        {text: '4', type: 'num', action: () => calc.appendNumber('4')},
        {text: '5', type: 'num', action: () => calc.appendNumber('5')},
        {text: '6', type: 'num', action: () => calc.appendNumber('6')},
        {text: '-', type: 'operator',action: () => calc.chooseOperator("-")},

        {text: '7', type: 'num', action: () => calc.appendNumber('7')},
        {text: '8', type: 'num', action: () => calc.appendNumber('8')},
        {text: '9', type: 'num', action: () => calc.appendNumber('9')},
        {text: '*', type: 'operator', action: () => calc.chooseOperator("*")},

        {text: 'C', type: 'action', action: () => calc.clear()},
        {text: '0', type: 'num', action: () => calc.appendNumber('0')},
        {text: '/', type: 'operator', action: () => calc.chooseOperator("/")},

        {text: 'del', type: 'action', action: () => calc.delete()},
        {text: '=', type: 'equal', action: () => calc.compute()}
    ];
    function handleButton(action) {
        action();
        display = calc.getDisplay();
    }

</script>
<h1>calc_0</h1>
<div class="calcBody">

    <Display {display}></Display>
    <Grid {buttons} onButtonClick={handleButton} />
</div>

<style>
    .calcBody {
display:flex;
flex-flow:column;
overflow: auto;
padding: 2rem;
  max-width: 65vw;
  margin: 2rem auto;
  border: 2px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 4px 12px #bdc3c7;
  background-color: #bdc3c7;
    }
</style>