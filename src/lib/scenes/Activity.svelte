<script>
    export let activity;

</script>


<div class="container" style="background: url({activity.images[0]});">
    <h1>{activity.name}</h1>
    <p>{activity.price} Per Person</p>
    <p>{activity.description}</p>
    <a href="{activity.link}">Book Now</a>
</div>
    

<style>

.container {
    position:fixed;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    z-index: -1;
    /* background:rgba(255,255,255,0.5); */
  }
</style>