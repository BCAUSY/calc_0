<script>
    import { fade, slide } from 'svelte/transition'
    export let display
</script>

<div class="display" transition:fade={{ duration: 200 }}>
	{display}
</div>

<style>
    :global(*){
        box-sizing: border-box;
    }


    .display {
    display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem;
	border: 2px solid #ccc;
	border-radius: 0.5rem;
	font-size: 2rem;
	background-color: #fafafa;
	min-height: 3rem;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
    }
</style>