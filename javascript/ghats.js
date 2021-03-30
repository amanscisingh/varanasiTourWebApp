const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")


fetch("data.json").then((res)=> {
    res.json().then((ress)=>{
        var ghats = ress['ghats'];
        showDescription1.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + ghats['assi'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription2.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + ghats['manikarnika'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription3.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + ghats['kedar'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
        
        showDescription4.addEventListener('click', ()=> {
            console.log("Description Clicked");
            aman.innerHTML =` <p style="padding:7px">` + ghats['dasaswamedh'] + `</p>` + `<button id='close'> X </button>`;
            const close = document.getElementById('close');
            close.addEventListener('click', () => {
                aman.innerHTML = "";
            });
            setTimeout(()=> { aman.innerHTML = ""; }, 10000)
        })
        
    })
})



