<script>
    import { fade, slide } from 'svelte/transition'
    export let display
	export let operator

	 $: if (operator === null) {
    console.log("operator is +");
  }
</script>

<div class="display" transition:fade={{ duration: 200 }}>
	<p id="top-display">
  <span class:active={operator === "+"}>+</span>
  <span class:active={operator === "-"}>−</span>
  <span class:active={operator === "*"}>×</span>
  <span class:active={operator === "/"}>÷</span>
</p>
	<p id="main-display">{display}</p>
	
</div>

<style>
   


    .display {
		justify-content: space-between;
	padding: var(--upp);
 /*    display: flex; */
	align-items: center;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	background-color: var(--green1);
	border-radius: 0.5rem;
	border: 3px solid var(--green1);
	margin: var(--dp) var(--dp) var(--up);
    }

	#top-display {
		font-size: 1rem;
		text-align: end;
		margin: 0;
		padding: 0;
		color: var(--dark2);
		transition: all 50ms;
		
	}

	#main-display {
		font-size: var(--uppp);
		margin:0;
	}

	.active{
		color: var(--red)
	}

</style>