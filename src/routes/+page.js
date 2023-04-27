
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        activities: activities
    };
}



const activities = [
    {

    },
    {
        name: "Activity #1",
        price: 100,
        review_score: 4.5,
        review_count: 402,
        description: "This is an example activity",
        link: "https://www.expedia.com/things-to-do/nassau-glass-bottom-boat-banana-boat-and-snorkelling-tour.a4513511.activity-details?endDate=2023-05-11&location=Bahamas&rid=13&selectedId=&sort=RECOMMENDED&startDate=2023-04-27&swp=on",
        images: [
            "https://mediaim.expedia.com/localexpert/4513511/3dce46ae-df52-4acf-94e6-4821680d5078.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/4513511/bdf6ce78-a02a-4e83-bd22-f144fe5e9399.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/4513511/7fd8591e-003d-42b4-aa8f-ba1251d56d5c.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/4513511/7ceeb907-e04e-4a61-a3e4-6372894dddb3.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/4513511/7cef537e-3f62-48af-8cce-26d9b69a432a.jpg?impolicy=resizecrop&rw=1005&rh=565",
        ],
    },
    {
        name: "Activity #2",
        price: 200,
        review_score: 3.1,
        review_count: 154,
        description: "This is an example activity",
        link: "https://www.expedia.com/things-to-do/blue-lagoon-beach-day-with-lunch.a301602.activity-details?&rid=13&location=Bahamas&startDate=2023-04-27&endDate=2023-04-27&sort=RECOMMENDED&selectedId=&swp=on",
        images: [
            "https://mediaim.expedia.com/localexpert/301602/b0434e79-dcc8-4b81-bf63-1c93a3d2d422.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/301602/b215adc4-5422-450f-bc07-7442ac9c23da.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/301602/1e36e69c-b669-4770-833a-8ead1c923dbe.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/301602/bdda768e-8de5-427e-84de-e3f42898fd7d.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/301602/f735a603-a48b-43a1-90ac-9f06dcf5c4ab.jpg?impolicy=resizecrop&rw=1005&rh=565",
            "https://mediaim.expedia.com/localexpert/301602/3aa2a242-04b7-4760-84c0-57d6c8baaac0.jpg?impolicy=resizecrop&rw=1005&rh=565",
        ],
    },
];