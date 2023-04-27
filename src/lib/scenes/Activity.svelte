<script>
    export let activity;

    import StickyBook from "../StickyBook.svelte";

</script>




<div class="activity-container">
    <div class="activity-info">
        <h1>{activity.name}</h1>
        <p>{activity.review_score}/5 ({activity.review_count})</p>
        <p><b>${activity.price}</b> Per Person</p>
        <p>{activity.description}</p>
    </div>
    <StickyBook link={activity.link} />

    <hr />

    <div class="image-container">
        {#each activity.images as image}
            <img class="activity-image" src={image} alt={activity.name} />
        {/each}
    </div>
</div>

<style>
    h1 {
        font-size: 2em;
    }
    p {
        font-size: 1.2em;
    }
    a {
        font-size: 1.2em;
    }

    .activity-image {
        width: 100%;
        height: auto;
    }

    .activity-info {
        /*  */
        padding: 1vmax 2vmax;
        width: 100%;
        height: auto;
        max-height: 16em;
    }

    .activity-info > * {
        margin: 0.5em 0;
    }

    .image-container {
        margin-top: 1em;
    }



    /* page size condition */
    @media only screen and (min-width: 600px) {
        .activity-info {
            padding: 0 15%;
        }
    }
    @media only screen and (max-width: 600px) {
        
    }
</style>
