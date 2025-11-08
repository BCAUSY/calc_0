<script>
	export let display = '0';
	export let operator = null;
	import { blur } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

<div class="display">
	<p id="top-display">
		<span class:active={operator === '+'}>+</span>
		<span class:active={operator === '-'}>−</span>
		<span class:active={operator === '*'}>×</span>
		<span class:active={operator === '/'}>÷</span>
	</p>
	{#key display}
		<p id="main-display" in:blur={{ amount: 1, duration: 460, easing: cubicInOut }}>
			{display}
		</p>
	{/key}
</div>

<style>
	.display {
		user-select: none;
		padding: var(--up) var(--up) var(--dp);
		width: 100%;
		background-color: var(--green1);
		border-radius: var(--dpp);
		border: 3px solid var(--green3);
		margin: var(--dp) var(--dp) var(--upp) ;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		box-shadow:
		inset 1px 1px 5px var(--dark2),
			inset 3px 5px 14px var(--green2),
			inset 12px 12px 44px var(--green2),
			inset 0 1px 1px rgba(0, 0, 0, 0.25),
			inset 0 1px 1px rgba(0, 0, 0, 0.644),
			inset 0 4px 4px rgba(0, 0, 0, 0.15),
			inset 0 8px 8px rgba(0, 0, 0, 0.1),
			0 16px 16px rgba(0, 0, 0, 0.05);
	}

	#top-display {
		font-weight: 900;
		font-size: 1rem;
		text-align: end;
		margin: 0;
		padding: 0;
		color: var(--green3);
		transition: color 50ms;
	}

	#main-display {
		color: var(--dark2);
		opacity: 0.95;
		font-size: var(--uppp);
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.active {
		color: var(--dark2);
	}
</style>
