<script>
	import { slide } from 'svelte/transition';

	export let memoryBank = [];
</script>

<p>memory</p>
<div class="result-container">
	{#each memoryBank as m}
		<p in:slide={{ duration: 800}} class="result">{m.prev} {m.operator} {m.curr} = {m.result}</p>
	{/each}
</div>

<style>
	.result-container {
		margin-left: var(--dp);
		border: 2px solid black;
	}

	.result {
        padding: var(--dp);
		font-weight: 900;
		font-size: var(--dp);
	}
</style>
