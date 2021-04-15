const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
const showDescription5 = document.getElementById("btn-5")
const showDescription6 = document.getElementById("btn-6")


var topAttraction;

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: { lat: 25.288, lng: 83.0068 },
    });
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('directionsPanel'));
    document.getElementById("submit").addEventListener("click", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
}

fetch("data.json").then((res) => {
    res.json().then((ress)=>{
        console.log(ress);
        topAttraction = ress["topAttraction"];
        showDescription1.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + topAttraction['ganges'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription2.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + topAttraction['kashiVishwanath'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription3.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + topAttraction['assi'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription4.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + topAttraction['newKashiVishwanath'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription5.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + topAttraction['ramnagar'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription6.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + topAttraction['alamgir'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
    })
})



