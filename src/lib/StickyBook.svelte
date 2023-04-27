<script>
    export let link;

    import sticky from "./sticky.js";

    let stickToTop = true;
    let isStuck = false;

    function handleStuck(e) {
        isStuck = e.detail.isStuck;
    }
</script>

<section>
    {#if stickToTop && isStuck}
        <div class="filler"></div>
    {/if}

    {#if isStuck}
        <div
            class="book-now-container sticky"
            class:isStuck
            data-position={stickToTop ? "top" : "bottom"}
            use:sticky={{ stickToTop }}
            on:stuck={handleStuck}
        >
            <a class="book-now" href={link} target="_blank">Book Now</a>
        </div>
    {/if}
    {#if !isStuck}
        <div
            class="book-now-container"
            class:isStuck
            data-position={stickToTop ? "top" : "bottom"}
            use:sticky={{ stickToTop }}
            on:stuck={handleStuck}
        >
            <a class="book-now" href={link} target="_blank">Book Now</a>
        </div>
    {/if}

    
</section>

<style>
    .book-now-container {
        display: flex;
        justify-content: end;
        width: 100%;

        background-color: var(--primary-transparent);

        overflow: hidden;
    }
    .book-now {
        display: block;
        background-color: var(--secondary);
        color: var(--text-secondary);
        margin: 0.9em 1em;
        padding: 0.5em 1em;
        border-radius: var(--radius);
        border: 1px solid #000;
        text-decoration: none;
    }

    .filler{
        height: 3.5em;
    }

    .sticky {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        transition: all 0.3s;
    }


    @media only screen and (min-width: 600px) {
        .book-now-container{
            padding: 0 15%;
        }
    }
</style>
