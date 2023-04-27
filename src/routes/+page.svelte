<script>
    import Activity from "../lib/scenes/Activity.svelte";
    import Landing from "../lib/scenes/Landing.svelte";
    import Buttons from "../lib/Buttons.svelte";

    import { swipe } from 'svelte-gestures';
    let direction;
    

    export let data;
    let activities = data.activities;


    let sceneIndex = 0;
    $: chosenActivity = activities[sceneIndex];
    
    

    function previousActivity() {
        if (sceneIndex > 0){
            sceneIndex -= 1;
        }
    }
    function nextActivity() {
        if (sceneIndex < activities.length - 1){
            sceneIndex += 1;
        }
    }

    function handleSwipe(event) {
        direction = event.detail.direction;
        if (direction == "left") {
            nextActivity();
        } else if (direction == "right") {
            previousActivity();
        }
    }
</script>






<section>
    <div 
        use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }} on:swipe={handleSwipe}
    >
    
    {#if sceneIndex == 0}
    <Landing />
    {/if}
    {#if sceneIndex > 0}

        <Activity activity={chosenActivity} />

    {/if}
    
    </div>
</section>



<Buttons 
sceneIndex={sceneIndex} 
activities={activities} 
previousActivityCallback={previousActivity} 
nextActivityCallback={nextActivity} />





