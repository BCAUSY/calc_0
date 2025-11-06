<script>
    export let text;
    export let onClick;
</script>

<button on:click={onClick}>
    {text}
</button>

<style>
    .num {
        padding: 5rem;
    }
</style>