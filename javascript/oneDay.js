const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
// const showDescription5 = document.getElementById("btn-5")
// const showDescription6 = document.getElementById("btn-6")
const edit = document.getElementById("edit")
const topAttraction = document.getElementsByClassName("top-attraction")[0]
console.log(topAttraction);

fetch("data.json").then((res)=> { res.json().then((ress)=> {
    var fullDescription = ress['ghats'];
    showDescription1.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + fullDescription['assi'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
    
    
    showDescription2.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + fullDescription['manikarnika'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
    
    
    showDescription3.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + fullDescription['kedar'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
    
    
    showDescription4.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + fullDescription['dasaswamedh'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
}) })

var mapContainer = document.createElement("div")
mapContainer.classList.add("top-attraction")
mapContainer.id = "map-container"
mapContainer.innerHTML = `
<div class="scroller" id="map-container">
<div id='map' style='height:100vh;'></div>
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhMjAyMyIsImEiOiJja2tteDRzMmIxdmphMnZwZ28zNTBzYmgyIn0.1P-bsCr_lbQcBBFA4i8IMQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/aditya2023/ckkqx2u5f2j1n18mrimqk85ri',
    });
</script>
`


edit.addEventListener('click', ()=> {
    document.body.append(mapContainer);
    const checkboxes = document.querySelectorAll('input[name="oneDay"]:checked');
    selected = [];
    str = "You Have Selected: ";
    console.log("Edit Clicked");
    checkboxes.forEach((checkbox) => {
        selected.push(checkbox.value);
        str = str + ' ' + checkbox.value;
    });
    topAttraction.remove();
    console.log(str);
    return selected;
});




