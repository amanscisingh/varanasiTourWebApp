const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
const showDescription5 = document.getElementById("btn-5")
// const showDescription5 = document.getElementById("btn-5")
// const showDescription6 = document.getElementById("btn-6")
const edit = document.getElementById("edit")
const topAttraction = document.getElementsByClassName("top-attraction")[0]
console.log(topAttraction);

const nameToCoordinate = {
	"Assi" : 0,
	"Manikarnika" : 1,
	"Kashi" : 2,
	"Newkashi" : 3,
    "Ramnagar":4
}

function startRouting(longitude, latitude) {
    console.log("function startRouting is Running");
    for (let i = 0; i < longitudes.length; i++) {
        newDropoff(new mapboxgl.LngLat(longitude[i], latitude[i]));
    }

}


fetch("data.json").then((res)=> { res.json().then((ress)=> {
    const latitudes = ress['coordinate_2']['latitudes']
    const longitudes = ress['coordinate_2']['longitudes']
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
        aman.innerHTML =` <p style="padding:7px">` + fullDescription['kashiVishwanath'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
    
    
    showDescription4.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + fullDescription['newKashiVishwanath'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })

    showDescription5.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + fullDescription['ramnagar'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
//recalculating the algorithm

    edit.addEventListener('click', ()=> {
        document.body.append(mapContainer);
        const checkboxes = document.querySelectorAll('input[name="twoDay"]:checked');
        selected = [];
        str = "You Have Selected: ";
        console.log("Edit Clicked");
        checkboxes.forEach((checkbox) => {
            selected.push(checkbox.value);
            str = str + ' ' + checkbox.value;
        });
        topAttraction.remove();
        latitudes_new = []
        longitudes_new = []
        for (let j = 0; j < selected.length; j++) {
            longitudes_new.push(longitudes[nameToCoordinate[selected[j]]])
            latitudes_new.push(latitudes[nameToCoordinate[selected[j]]])
        }

        //console.log(str);
        optimal1(longitudes_new, latitudes_new);
        console.log(selected);
    });

}) })

var mapContainer = document.createElement("div")
mapContainer.classList.add("top-attraction")
mapContainer.id = "map-container"
mapContainer.innerHTML = `
<div id='map' style='height:65vh;'></div>
`


//Shortest Path Algorithm
function optimal1(longitude, latitude) {
    var truckLocation = [83.00013, 25.32055];
    var warehouseLocation = [83.00013, 25.32055];
    var lastQueryTime = 0;
    var lastAtRestaurant = 0;
    var keepTrack = [];
    var currentSchedule = [];
    var currentRoute = null;
    var pointHopper = {};
    var pause = true;
    var speedFactor = 50;

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhMjAyMyIsImEiOiJja2tteDRzMmIxdmphMnZwZ28zNTBzYmgyIn0.1P-bsCr_lbQcBBFA4i8IMQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/aditya2023/ckkqx2u5f2j1n18mrimqk85ri', // stylesheet location
        center: truckLocation, // starting position
        zoom: 12
    });


    var warehouse = turf.featureCollection([turf.point(warehouseLocation)]);
    var dropoffs = turf.featureCollection([]);
    var nothing = turf.featureCollection([]);
    map.on('load', function() {
        var marker = document.createElement('div');
        marker.classList = 'truck';

        // Create a new marker
        truckMarker = new mapboxgl.Marker(marker)
            .setLngLat(truckLocation)
            .addTo(map);
        map.addLayer({
            id: 'warehouse-symbol',
            type: 'symbol',
            source: {
                data: warehouse,
                type: 'geojson'
            },


        });

        map.addLayer({
            id: 'dropoffs-symbol',
            type: 'symbol',
            source: {
                data: dropoffs,
                type: 'geojson'
            },
            layout: {
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
                'icon-image': 'marker-15',
            }
        });

        for (let i = 0; i < longitude.length; i++) {
            newDropoff(new mapboxgl.LngLat(longitude[i], latitude[i]));
        }

        map.on('click', function(e) {
            // When the map is clicked, add a new drop-off point
            // and update the `dropoffs-symbol` layer
            newDropoff(map.unproject(e.point));
            updateDropoffs(dropoffs);
        });

        map.addSource('route', {
            type: 'geojson',
            data: nothing
        });

        map.addLayer({
            id: 'routeline-active',
            type: 'line',
            source: 'route',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': 'black',
                'line-width': [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12, 3,
                    22, 40
                ]
            }
        }, 'waterway-label');

        map.addLayer({
            id: 'routearrows',
            type: 'symbol',
            source: 'route',
            layout: {
                'symbol-placement': 'line',
                'text-field': '>>',
                'text-size': [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12, 24,
                    22, 160
                ],
                'symbol-spacing': [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12, 30,
                    22, 160
                ],
                'text-keep-upright': false
            },
            paint: {
                'text-color': 'red',
                'text-halo-color': 'hsl(55, 11%, 96%)',
                'text-halo-width': 3
            }
        }, 'waterway-label');

    });


    function newDropoff(coords) {
        // Store the clicked point as a new GeoJSON feature with
        // two properties: `orderTime` and `key`
        var pt = turf.point(
            [coords.lng, coords.lat], {
                orderTime: Date.now(),
                key: Math.random()
            }
        );
        dropoffs.features.push(pt);
        pointHopper[pt.properties.key] = pt;

        // Make a request to the Optimization API
        $.ajax({
            method: 'GET',
            url: assembleQueryURL(),
        }).done(function(data) {
            // Create a GeoJSON feature collection
            var routeGeoJSON = turf.featureCollection([turf.feature(data.trips[0].geometry)]);

            // If there is no route provided, reset
            if (!data.trips[0]) {
                routeGeoJSON = nothing;
            } else {
                // Update the `route` source by getting the route source
                // and setting the data equal to routeGeoJSON
                map.getSource('route')
                    .setData(routeGeoJSON);
            }

            if (data.waypoints.length === 12) {
                window.alert('Maximum number of points reached. Read more at docs.mapbox.com/api/navigation/#optimization.');
            }
        });
    }

    function updateDropoffs(geojson) {
        map.getSource('dropoffs-symbol')
            .setData(geojson);
    }


    function assembleQueryURL() {

        // Store the location of the truck in a variable called coordinates
        var coordinates = [truckLocation];
        var distributions = [];


        // Create an array of GeoJSON feature collections for each point
        var restJobs = objectToArray(pointHopper);

        // If there are any orders from this restaurant
        if (restJobs.length > 0) {

            // Check to see if the request was made after visiting the restaurant
            var needToPickUp = restJobs.filter(function(d, i) {
                return d.properties.orderTime > lastAtRestaurant;
            }).length > 0;

            // If the request was made after picking up from the restaurant,
            // Add the restaurant as an additional stop
            if (needToPickUp) {
                var restaurantIndex = coordinates.length;
                // Add the restaurant as a coordinate
                coordinates.push(warehouseLocation);
                // push the restaurant itself into the array
                keepTrack.push(pointHopper.warehouse);
            }

            restJobs.forEach(function(d, i) {
                // Add dropoff to list
                keepTrack.push(d);
                coordinates.push(d.geometry.coordinates);
                // if order not yet picked up, add a reroute
                if (needToPickUp && d.properties.orderTime > lastAtRestaurant) {
                    distributions.push(restaurantIndex + ',' + (coordinates.length - 1));
                }
            });
        }

        // Set the profile to `driving`
        // Coordinates will include the current location of the truck,
        return 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + coordinates.join(';') + '?distributions=' + distributions.join(';') + '&overview=full&steps=true&geometries=geojson&source=first&access_token=' + mapboxgl.accessToken;
    }

    function objectToArray(obj) {
        var keys = Object.keys(obj);
        var routeGeoJSON = keys.map(function(key) {
            return obj[key];
        });
        return routeGeoJSON;
    }

};

