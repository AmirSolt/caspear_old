<script>

    export let activity;


   

   
</script>

<div class="activity-container">
    <div class="activity-info">
        <h1>{activity.name}</h1>
        <p>{activity.review_score}/5 ({activity.review_count})</p>
        <p><b>${activity.price}</b> Per Person</p>
        <p>{activity.description}</p>
        <div class="book-now-container">
            <a class="book-now" href={activity.link} target="_blank">Book Now</a>
        </div>
    </div>

    <hr>

    <div class="image-container">

        {#each activity.images as image}
            <img class="activity-image" src={image} alt={activity.name} />
        {/each}
    </div>
</div>

<style>

    h1{
        font-size: 2em;
    }
    p{
        font-size: 1.2em;
    }
    a{
        font-size: 1.2em;
    }
 

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
        max-height: 16em;

    }

    .activity-info > *{
        margin: 0.5em 0;
    }

    .image-container{
        margin-top: 1em;
    }


    .book-now-container{
        display: flex;
        justify-content: end;
        width: 100%;
    }
    .book-now{
        display: block;
        background-color: var(--secondary);
        color: var(--text-secondary);
        margin: 0.9em 0;
        padding: 0.5em 1em;
        border-radius: var(--radius);
        border: 1px solid #000;
        text-decoration: none;
    }

    /* page size condition */
    @media only screen and (min-width: 600px) {
        .activity-container {
            margin-top: 16em;
        }
        .activity-info{
            padding: 0 15%;

        }
    
    }
    @media only screen and (max-width: 600px) {
        .activity-container {
            margin-top: 16em;
        }
    }
</style>
