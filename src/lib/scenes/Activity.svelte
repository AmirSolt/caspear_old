<script>

    export let activity;


   

   
</script>

<div class="activity-container">
    <div class="activity-info">
        <h1>{activity.name}</h1>
        <p>{activity.review_score}/5 ({activity.review_count})</p>
        <p>${activity.price} Per Person</p>
        <p>{activity.description}</p>
        <div class="book-now-container">
            <button class="book-now" href={activity.link} target="_blank">Book Now</button>
        </div>
    </div>

    {#each activity.images as image}
        <img class="activity-image" src={image} alt={activity.name} />
    {/each}
</div>

<style>
    .activity-image {
        width: 100%;
        height: auto;
    }

    .activity-info {

        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--primary-transparent);
        padding: 1vmax 2vmax;
        width: 100%;
        height: auto;
        max-height: 11em;
    }

    .activity-info > *{
        margin: 0.2em 0;
    }


    .book-now-container{
        display: flex;
        justify-content: end;
        width: 100%;
    }
    .book-now{
        background-color: var(--secondary);
        color: var(--text-secondary);
        font-size: 1em;
        margin: 0.6em 0;
        padding: 0.5em 1em;
        border-radius: 0.5em;
        border: 1px solid #000;
    }

    /* page size condition */
    @media only screen and (min-width: 600px) {
        .activity-container {
            margin-top: 11em;
        }
        .activity-info{
            padding: 0 15%;

        }
    
    }
    @media only screen and (max-width: 600px) {
        .activity-container {
            margin-top: 11em;
        }
    }
</style>
