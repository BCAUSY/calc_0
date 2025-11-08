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
    <Button text={buttons[16].text} type={buttons[16].type} onClick={() => onButtonClick(buttons[16].action)}  />
</div> 

<style>
    .grid {
        border-bottom: 1px solid var(--light2);
        display: flex;
        flex-wrap: wrap;
        justify-content:  flex-start;
        padding-bottom: var(--dppp);
        /* max-width: 80%; */
        /* grid-template-columns: repeat(4, 1fr); */
    }
</style>