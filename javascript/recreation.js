const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")

fetch('data.json').then((res)=>{ res.json().then((ress)=> {
    var recreation = ress['recreation'];
    showDescription1.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + recreation['varanasiBoating'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
    
    
    showDescription2.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + recreation['gangaAarati'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
    
    
    showDescription3.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + recreation['sunrise'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
    
    
    showDescription4.addEventListener('click', ()=> {
        console.log("Description Clicked");
        aman.innerHTML =` <p style="padding:7px">` + recreation['cruise'] + `</p>` + `<button id='close'> X </button>`;
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
            aman.innerHTML = "";
        });
        setTimeout(()=> { aman.innerHTML = ""; }, 10000)
    })
}) })

