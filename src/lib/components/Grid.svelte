<script>
    import Button from "./Button.svelte";
    export let buttons = [];
    export let onButtonClick;
</script>

<div class="grid">
    {#each buttons as btn }
    <Button text={btn.text} type={btn.type} onClick={() => onButtonClick(btn.action)} />
        {/each}
</div> 

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
</style>