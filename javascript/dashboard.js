console.log("Dashboard JS File is running...");

const aman = document.getElementById("change")
const touristBtn = document.getElementById('touristBtn')
const cityTourBtn = document.getElementById('cityTourBtn')
const foodBtn = document.getElementById('foodBtn')
const shoppingBtn = document.getElementById('shoppingBtn')
const healthBtn = document.getElementById('healthBtn')


const tourists = ["Top Attraction", "Temples", "Ghat", "Recreation", "Heritage", "Other"]
const cityTour = ["One Day", "Two Day", "Three Day", "Half Day"]
const shopping = ["Saree", "Toys"]
const food = ["Local Cuisine", "Vegiterian", "Non-Vegiterian", "Snakes/Street Food"]
const health = ["Spa", "Ayurveda", "Yoga", "Hospitals"]

const touristsLink = ["topAttraction.html", "temples.html","ghats.html","recreation.html","heritage.html", "other.html"]
const touristsImg = ["Top Attractioin", "Temples", "Ghat", "Recreation", "Heritage", "Other"]



touristBtn.addEventListener('click', () => {
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < tourists.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href= `+ touristsLink[i] +`>
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
