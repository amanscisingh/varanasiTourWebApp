console.log("topAttraction JS File is running...");

const aman = document.getElementById("change")
const touristBtn = document.getElementById('touristBtn')
const cityTourBtn = document.getElementById('cityTourBtn')
const foodBtn = document.getElementById('foodBtn')
const shoppingBtn = document.getElementById('shoppingBtn')
const healthBtn = document.getElementById('healthBtn')
const sampleBtn = document.getElementById("btn")


const tourists = ["Top Attraction", "Temples", "Ghat", "Recreation", "Heritage", "Other"]
const cityTour = ["One Day", "Two Day", "Three Day", "Half Day"]
const shopping = ["Saree", "Toys"]
const food = ["Local Cuisine", "Vegiterian", "Non-Vegiterian", "Snakes/Street Food"]
const health = ["Spa", "Ayurveda", "Yoga", "Hospitals"]

const touristsLink = ["topAttraction.html", "temples.html","topAttraction.html","topAttraction.html","topAttraction.html", "topAttraction.html"]

const touristsImg = ["Top Attractioin", "Temples", "Ghat", "Recreation", "Heritage", "Other"]

touristBtn.addEventListener('click', () => {
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < tourists.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href=` + touristsLink[i] + ` target="_self">
                <img src="https://picsum.photos/seed/picsum/60/60" alt="1" >
                <p> ` + tourists[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

cityTourBtn.addEventListener('click', () => {
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < cityTour.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href="#">
                <img src="https://picsum.photos/seed/picsum/60/60" alt="1" >
                <p> ` + cityTour[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

shoppingBtn.addEventListener('click', () => {
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < shopping.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href="#">
                <img src="https://picsum.photos/seed/picsum/60/60" alt="1" >
                <p> ` + shopping[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

foodBtn.addEventListener('click', () => {
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < food.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href="#">
                <img src="https://picsum.photos/seed/picsum/60/60" alt="1" >
                <p> ` + food[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

healthBtn.addEventListener('click', () => {
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < health.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href="#">
                <img src="https://picsum.photos/seed/picsum/60/60" alt="1" >
                <p> ` + health[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})




sampleBtn.addEventListener('click', () => {
    console.log("Clickedddd")
    tempStr = ""
    aman.innerHTML = `
    <p>Ganges River, Hindi Ganga, great river of the plains of the northern Indian subcontinent. Although officially as well as popularly called the Ganga in Hindi and in other Indian languages, internationally it is known by its conventional name, the Ganges. From time immemorial it has been the holy river of Hinduism. For most of its course it is a wide and sluggish stream, flowing through one of the most fertile and densely populated regions in the world. Despite its importance, its length of 1,560 miles (2,510 km) is relatively short compared with the other great rivers of Asia or of the world.</p>
    <button id='close'> X </button>
    `;

    const close = document.getElementById('close')
    close.addEventListener('click', () => {
        console.log("Close clicked");
        aman.innerHTML = "";
    })
})

