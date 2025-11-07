<script>
    import Button from "./Button.svelte";
    export let buttons = [];
    export let onButtonClick;
</script>

<div class="grid">
    {#each buttons as btn }
    {#if btn.text !== "="}
    <Button text={btn.text} type={btn.type} onClick={() => onButtonClick(btn.action)} />
        {/if}
        {/each}
    <Button text={buttons[16].text} type={buttons[16].type} onClick={() => onButtonClick(buttons[16].action)} />
</div> 

<style>
    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content:  flex-start;
        /* max-width: 80%; */
        /* grid-template-columns: repeat(4, 1fr); */
    }
</style>