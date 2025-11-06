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
        margin:0.35rem;
        font-family: monospace;
        font-size: 2rem;
        border-radius: 5%;
        border: 1px solid #8676322f;
        transition: background-color 0.24s, transform 0.04s;
    }
    .num:hover {
background-color: #f1c40e33;
    }

    .btn:active {
        transform: scale(0.99);
        background-color: #f1c40e;
    }
    .num {
        padding: 2rem;
    }

    .operator {
        background-color: beige;
    }

</style>