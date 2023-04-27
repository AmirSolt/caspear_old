<script>
    import Activity from "../lib/scenes/Activity.svelte";


    const activities = [
        {
        name: "Activity #1",
        price: 100,
        description: "This is an example activity",
        link:"https://www.expedia.com/things-to-do/nassau-glass-bottom-boat-banana-boat-and-snorkelling-tour.a4513511.activity-details?endDate=2023-05-11&location=Bahamas&rid=13&selectedId=&sort=RECOMMENDED&startDate=2023-04-27&swp=on",
        images: ["https://mediaim.expedia.com/localexpert/4513511/3dce46ae-df52-4acf-94e6-4821680d5078.jpg?impolicy=resizecrop&rw=1005&rh=565"]
        },
        {
        name: "Activity #2",
        price: 200,
        description: "This is an example activity",
        link:"https://www.expedia.com/things-to-do/blue-lagoon-beach-day-with-lunch.a301602.activity-details?&rid=13&location=Bahamas&startDate=2023-04-27&endDate=2023-04-27&sort=RECOMMENDED&selectedId=&swp=on",
        images: ["https://mediaim.expedia.com/localexpert/301602/b0434e79-dcc8-4b81-bf63-1c93a3d2d422.jpg?impolicy=resizecrop&rw=1005&rh=565"]
        },

    ]


    let sceneIndex = 0;
    $: chosenActivity = activities[sceneIndex];


    function previousActivity() {
        sceneIndex-=1;
    }
    function nextActivity() {
        sceneIndex+=1;
    }

</script>

<Activity activity={chosenActivity} />


<button on:click={previousActivity}>
    Previous
</button>
<button on:click={nextActivity}>
    Next
</button>
