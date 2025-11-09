<script>
	import { bounceIn, bounceOut, cubicIn, cubicOut } from 'svelte/easing';
	import { fly, fade, slide } from 'svelte/transition';
	import Button from './Button.svelte';

	export let memoryBank = [];
	let visible = false;

	let showList = false;
</script>

<div class="module">
	<button on:click={() => (visible = !visible)}>Memory</button>

	{#if visible}
		<div
			class="result-container"
			in:fly={{ x: -8, duration: 120, easing: cubicOut }}
			out:fly={{ x: -2, duration: 110, easing: cubicIn }}
		>
			{#each [...memoryBank].reverse() as m, i}
				<p
					in:fly={{ x: -3, duration: 120, easing: bounceIn }}
					out:fade={{ duration: 300 }}
					class="result"
				>
					{m.prev}
					{m.operator}
					{m.curr} = {m.result}
				</p>
			{/each}
		</div>
	{/if}
</div>

<style>
	.result-container {
		text-align: end;

		min-height: 90px;
		padding: var(--dppp);
		margin: 0 0 var(--dp);
		width: 100%;
		border: 5px solid var(--dark3);
		background-color: var(--green3);
		overflow: hidden;
		border-radius: var(--dppp);
	}

	p {
		min-width: 75px;
	}
	.result {
		color: var(--dark2);
		font-weight: 800;
		width: 100%;
		margin: 0;
		padding: var(--dpppp) var(--dp);
		font-size: var(--dp);
		overflow: hidden;
	}

	button {
		margin: var(--uppp) var(--dpppp) var(--dpppp);
		position: relative;
		left: -93px;
		background-color: var(--orange);
		border: 1px solid var(--light2);
		border-radius: var(--dppp);
		transform: scale(1);
	}

	button:active {
		transform: scale(0.99);
		filter: brightness(1.03);
		box-shadow:
			0 0 3px var(--dark3),
			0 0 9px var(--dark3),
			0 0 16px var(--dark3);
	}

	.module {
		width: 100%;
		padding: var(--dpppp) 0 var(--up);
	}
</style>
