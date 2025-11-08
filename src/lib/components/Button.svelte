<script>
	export let text;
	export let onClick;
	export let type;
</script>

<button class="btn {type}" on:click={onClick}>
	{text}
</button>

<style>
	.btn {
		margin: var(--dpp);
		padding: var(--up);
		font-family: monospace;
		font-size: var(--upp);
		font-weight: 900;
		color: var(--dark1);
		border-radius: var(--dp);
		border: 1px solid #8676322f;
		transition: all 0.05s cubic-bezier(0.77, 0, 0.175, 1);
		box-shadow:
			0 0 0px var(--light2),
			0 0 0px var(--light2),
			0 0 0px var(--light2),
			inset 1px 1px 0px var(--light1);
	}
	.btn:hover {
		cursor: pointer;
		filter: brightness(1.03);
	}
	.btn:active {
		transform: scale(0.99);
		filter: brightness(1.05);
		box-shadow:
			0 0 3px var(--light1),
			0 0 9px var(--light1),
			0 0 16px var(--light1);
		cursor: grabbing;
	}

	.num {
		background-color: var(--light2);
		color: var(--light1);
		padding: var(--upp);
	}
	.num:hover {
		background-color: var(--light2);
	}

	.num:active {
		box-shadow: inset 1px 1px 0px var(--light2);
		background-color: var(--light1);
		color: var(--dark3);
	}

	.operator {
		background-color: var(--dark3);
		color: var(--dark2);
	}

	.operator:active {
		background-color: var(--light1);
	}
	.equal {
		width: calc(100% / 1.5);
		margin-top: var(--dp);
		margin-left: auto;
		background-color: var(--orange);
	}

	.action {
		font-weight: 600;
		color: var(--dark3);
		background-color: var(--red);
	}
	.action:active {
		box-shadow:
			inset 1px 1px 0px var(--light1),
			0 0 3px var(--orange1),
			0 0 9px var(--orange1),
			0 0 16px var(--orange1);
		background-color: red(--orange1);
	}
</style>
