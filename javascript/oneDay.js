const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
const navDetail = document.getElementById("navDetail")
console.log(navDetail);
const edit = document.getElementById("edit")
const topAttraction = document.getElementsByClassName("top-attraction")[0]
console.log(topAttraction);
var mapForRouting;

const nameToCoordinate = {
	"Assi" : 0,
	"Manikarnika" : 1,
	"Kedar" : 2,
	"Dasaswamedh" : 3
}

function initMap(coordinatesArray) {
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

function calculateAndDisplayRoute(directionsService, directionsRenderer, coordinatesArray) {
    // for (let i = 0; i < checkboxArray.length; i++) {
    //     if (checkboxArray.options[i].selected) {
    //     waypts.push({
    //         location: checkboxArray[i].value,
    //         stopover: true,
    //     });
    //     }
    // }
    
    console.log(coordinatesArray[0]['location']);
    console.log( coordinatesArray[coordinatesArray.length - 1]['location']);
    directionsService.route(
        {
        origin: coordinatesArray[0]['location'],
        destination: coordinatesArray[coordinatesArray.length - 1]['location'],
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

            // For each route, display summary information.
            for (let i = 0; i < route.legs.length; i++) {
            const routeSegment = i + 1;
            navDetail.innerHTML +=
                "<b>Route Segment: " + routeSegment + "</b><br>";
            navDetail.innerHTML += route.legs[i].start_address + " to ";
            navDetail.innerHTML += route.legs[i].end_address + "<br>";
            navDetail.innerHTML += route.legs[i].distance.text + "<br><br>";
            }
        } else {
            window.alert("Directions request failed due to " + status);
        }
        }
);
}





fetch("data.json").then((res)=> { res.json().then((ress)=> {
    const totalCoordinates = ress['coordinate_1']
    console.log(totalCoordinates);
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
        str = "We will be moving to: ";
        console.log("Edit Clicked");
        checkboxes.forEach((checkbox) => {
            selected.push(checkbox.value);
            str = str + ' -> ' + checkbox.value;
        });
        selected.forEach((each) => {
            coordinates.push(nameToCoordinate[totalCoordinates[each]])
        })
        navDetail.innerHTML = str;
        setTimeout(()=> { navDetail.innerHTML = "Now moving from Your Location to" + selected[0] },3000);
        topAttraction.remove();

        initMap(totalCoordinates)
    });

}) })

var mapContainer = document.createElement("div")
mapContainer.classList.add("top-attraction")
mapContainer.id = "map-container"
mapContainer.innerHTML = `
<div id='map' style='height:65vh;'></div>
`

