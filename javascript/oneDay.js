const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
const navDetail = document.getElementById("navDetail")
const edit = document.getElementById("edit")
const topAttraction = document.getElementsByClassName("top-attraction")[0]
const directionsPanel = document.getElementById("directionsPanel")
const expandCollapse = document.getElementById("expand-collapse")
const delList = document.getElementsByClassName("del")
console.log(delList[0]);
directionsPanel.style.visibility = "visible";
var coordinatesArray = [{lat: 25.28914, lng: 83.00619}, {lat: 25.31072, lng: 83.01398}, {lat: 25.29896, lng: 83.00730}, {lat: 25.30629, lng: 83.01039}]
var mapForRouting;

const nameToCoordinate = {
	"Assi" : 0,
	"Manikarnika" : 1,
	"Kedar" : 2,
	"Dasaswamedh" : 3
}

function initMap(coordinatesArray) {
    if (coordinatesArray.length < 2) {
        navDetail.innerText = "You have chosen less than 2 places to visit. Please make a selection worth more than two places!!!";
        // setTimeout(()=> { location.reload() } ,3000)
    } else {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 25.2917, lng: 83.00617 },
        });
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(document.getElementById('directionsPanel'));
        calculateAndDisplayRoute(directionsService, directionsRenderer, coordinatesArray);
    }
    
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer, coordinatesArray) {
    const start = coordinatesArray[0]
    const final = coordinatesArray[coordinatesArray.length - 1]
    if (coordinatesArray.length === 2) {
        directionsService.route(
            {
                origin: start,
                destination: final,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
                console.log(status);
                console.log(response);
            if (status === "OK" && response) {
                directionsRenderer.setDirections(response);
                const route = response.routes[0];
                // const summaryPanel = document.getElementById("directions-panel");
                // summaryPanel.innerHTML = "";
    
                
            } else {
                window.alert("Directions request failed due to " + status);
            }
            }
    );
    } else {
        const checkboxArray = coordinatesArray;
        const waypts = [];
        for (let i = 1; i < checkboxArray.length - 1; i++) {
            waypts.push({
                location: checkboxArray[i],
                stopover: true,
            });
        }
        directionsService.route(
            {
                origin: start,
                destination: final,
                waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
                console.log(status);
                console.log(response);
            if (status === "OK" && response) {
                directionsRenderer.setDirections(response);
                const route = response.routes[0];
                // const summaryPanel = document.getElementById("directions-panel");
                // summaryPanel.innerHTML = "";
    
                
            } else {
                window.alert("Directions request failed due to " + status);
            }
            }
    );   
    }
}

fetch("data.json").then((res)=> { res.json().then((ress)=> {
    const totalCoordinates = ress['coordinate_1']
    // console.log(totalCoordinates);
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

//recalculating the algorithm on clicking the edit & recALCULATE BUTTON

    edit.addEventListener('click', ()=> {
        document.body.append(mapContainer);
        const checkboxes = document.querySelectorAll('input[name="oneDay"]:checked');
        var coordinates = [];
        selected = [];
        console.log("Edit Clicked");
        checkboxes.forEach((checkbox) => {
            selected.push(checkbox.value);
        });
        for (let i = 0; i < selected.length; i++) {
            const element = nameToCoordinate[selected[i]];
            coordinates.push(coordinatesArray[element])
        }

        console.log(coordinates);        
        topAttraction.remove();

        initMap(coordinates)
    });

}) })

var mapContainer = document.createElement("div")
mapContainer.classList.add("top-attraction")
mapContainer.id = "map-container"
mapContainer.innerHTML = `
<div id='map' style='height:65vh;'></div>
`

var m = 0
function expand_Collapse(mode) {
    if (mode === 0) {
        directionsPanel.style.height = "35vh";
        mapContainer.style.height = "45vh";
        mode = 1;
        expandCollapse.innerHTML = '👇';
        return mode;
    } else {
        directionsPanel.style.height = "18vh";
        mapContainer.style.height = "65vh";
        mode = 0;
        expandCollapse.innerHTML = '👆';
        return mode;
    }
}

expandCollapse.addEventListener('click', ()=> {
    m = expand_Collapse(m)
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