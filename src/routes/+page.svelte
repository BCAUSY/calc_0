<script>
	import { Calculator } from '$lib/utils';
	import MemoryDisplay from '$lib/components/MemoryDisplay.svelte';
	import Display from '$lib/components/Display.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import { fade, fly } from 'svelte/transition';

	let calc = new Calculator();

	$: display = calc.getDisplay();
	$: operator = calc.getOperator();
	$: memoryBank = calc.getMemory();
	function getMemory() {
		return memoryBank;
	}

	const buttons = [
		{ text: '1', type: 'num', action: () => calc.appendNumber('1') },
		{ text: '2', type: 'num', action: () => calc.appendNumber('2') },
		{ text: '3', type: 'num', action: () => calc.appendNumber('3') },
		{ text: '+', type: 'operator', action: () => calc.chooseOperator('+') },

		{ text: '4', type: 'num', action: () => calc.appendNumber('4') },
		{ text: '5', type: 'num', action: () => calc.appendNumber('5') },
		{ text: '6', type: 'num', action: () => calc.appendNumber('6') },
		{ text: '−', type: 'operator', action: () => calc.chooseOperator('-') },

		{ text: '7', type: 'num', action: () => calc.appendNumber('7') },
		{ text: '8', type: 'num', action: () => calc.appendNumber('8') },
		{ text: '9', type: 'num', action: () => calc.appendNumber('9') },
		{ text: '×', type: 'operator', action: () => calc.chooseOperator('*') },

		{ text: 'C', type: 'action', action: () => calc.clear() },
		{ text: '0', type: 'num', action: () => calc.appendNumber('0') },
		{ text: '÷', type: 'operator', action: () => calc.chooseOperator('/') },

		{ text: 'del', type: 'action', action: () => calc.delete() },
		{ text: '=', type: 'equal', action: () => calc.compute() }
	];

	function handleButton(action) {
		if (action.toString().match('calc.appendNumber') && calc.previousInput === '-')
			calc.currentInput = '-';
		action();
		operator = calc.getOperator();
		display = calc.getDisplay();
		memoryBank = calc.getMemory();
	}
</script>

<div class="calcBody">
	<h1>calc_0</h1>
	<Display {display} {operator} />
	<Grid {buttons} onButtonClick={handleButton} />
</div>
<div class="memory-panel"><MemoryDisplay {memoryBank}></MemoryDisplay></div>


<style>
	h1 {
		font-size: 1rem;
		margin: 0 var(--dppp) var(--up);
		color: var(--dark2);
	}
	.calcBody {
		display: flex;
		flex-flow: column;
		max-width: 440px;
		padding: var(--upp);
		border: 2px solid var(--light2);
		border-radius: var(--dp);
		box-shadow:
			inset 3px 5px 14px var(--light1),
			0 1px 1px rgba(0, 0, 0, 0.25),
			0 1px 1px rgba(0, 0, 0, 0.644),
			0 4px 4px rgba(0, 0, 0, 0.15),
			0 8px 8px rgba(0, 0, 0, 0.1),
			0 16px 16px rgba(0, 0, 0, 0.05);
		background-color: var(--green2);
		transform: scale(99.5%);
		transition: all 0.15s cubic-bezier(0.65, -0.25, 0.25, 1.25);
	}

	.calcBody:hover {
		box-shadow:
			inset 3px 5px 5px var(--light1),
			0 1px 2px rgba(0, 0, 0, 0.404),
			0 2px 4px rgba(0, 0, 0, 0.07),
			0 4px 8px rgba(0, 0, 0, 0.07),
			0 8px 16px rgba(0, 0, 0, 0.07),
			0 16px 32px rgba(0, 0, 0, 0.07),
			0 32px 64px rgba(0, 0, 0, 0.007);
		border-radius: var(--dpp);
		transform: scale(100%);
	}
</style>
