// Service workers
// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("sw.js").then(registration => {
//         console.log("SW Registered!");
//         console.log(registration);
//     }).catch(err => {
//         console.log("SW Registration Failed!");
//         console.error(err);
//     })
// }


const aman = document.getElementById("change")
const touristBtn = document.getElementById('touristBtn')
const cityTourBtn = document.getElementById('cityTourBtn')
const foodBtn = document.getElementById('foodBtn')
const shoppingBtn = document.getElementById('shoppingBtn')
const healthBtn = document.getElementById('healthBtn')
const scroller = document.getElementById('change')

scroller.style.visibility = "hidden";


const tourists = ["Attraction", "Temples", "Ghat", "Recreation", "Heritage", "Other"]
const cityTour = ["One Day", "Two Day", "Three Day", "Half Day"]
const shopping = ["Saree", "Toys"]
const food = ["Local Cuisine", "Vegiterian", "Non-Vegiterian", "Snakes/Street Food"]
const health = ["Spa", "Ayurveda", "Yoga", "Hospitals"]

const touristsLink = ["topAttraction.html", "temples.html","ghats.html","recreation.html","heritage.html", "other.html"]
const touristsImage = ['images/logo/top-attraction.png', 'images/logo/temple.png', 'images/logo/ghat.png', 'images/logo/recreation.png', 'images/logo/heritage.png', 'images/logo/other.png']
const cityTourImage = []
const shoppingImage = ['images/logo/saree.png', 'images/logo/toys.png']
const foodImage = ['images/logo/cuisine.png', 'images/logo/veg.png', 'images/logo/non-veg.png', 'images/logo/street.png']
const healthImage = ['images/logo/spa.png', 'images/logo/ayurveda.png', 'images/logo/yoga.png', 'images/logo/hospitals.png']

const cityTourLink = ["oneDay.html", "twoDay.html", "threeDay.html"]



touristBtn.addEventListener('click', () => {
    scroller.style.visibility = "visible";
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < tourists.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href= `+ touristsLink[i] +`>
                <img src=`+ touristsImage[i] +` alt="1" >
                <p> ` + tourists[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

cityTourBtn.addEventListener('click', () => {
    scroller.style.visibility = "visible";
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < cityTour.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href=`+ cityTourLink[i] +`>
                <img src=`+ cityTourImage[i] +` alt="1" >
                <p> ` + cityTour[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

shoppingBtn.addEventListener('click', () => {
    scroller.style.visibility = "visible";
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < shopping.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href="#">
                <img src=`+ shoppingImage[i] +` alt="1" >
                <p> ` + shopping[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

foodBtn.addEventListener('click', () => {
    scroller.style.visibility = "visible";
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < food.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href="#">
                <img src=`+ foodImage[i] +` alt="1" >
                <p> ` + food[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})

healthBtn.addEventListener('click', () => {
    scroller.style.visibility = "visible";
    tempStr = ""
    console.log("Yay Clicked");
    for (let i = 0; i < health.length; i++) {
        tempStr = tempStr.concat(`
        <div class="element">
            <a href="#">
                <img src=`+ healthImage[i] +` alt="1" >
                <p> ` + health[i] + ` </p>
            </a>
        </div>
        `)
    };
    aman.innerHTML = tempStr;
})


touristBtn.addEventListener('click', ()=> {
    delList[0].remove();
    delList[1].remove();
    delList[2].remove();
})
cityTourBtn.addEventListener('click', ()=> {
    delList[0].remove();
    delList[1].remove();
    delList[2].remove();
})
foodBtn.addEventListener('click', ()=> {
    delList[0].remove();
    delList[1].remove();
    delList[2].remove();
})
shoppingBtn.addEventListener('click', ()=> {
    delList[0].remove();
    delList[1].remove();
    delList[2].remove();
})
healthBtn.addEventListener('click', ()=> {
    delList[0].remove();
    delList[1].remove();
    delList[2].remove();
})