<script>
    import Button from "./Button.svelte";
    export let buttons = [];
    export let onButtonClick;
</script>

<div class="grid">
    {#each buttons as btn }
    <Button text={btn.text} onClick={() => onButtonClick(btn.action)} />
        {/each}
</div> 