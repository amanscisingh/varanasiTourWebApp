const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
// const showDescription5 = document.getElementById("btn-5")
// const showDescription6 = document.getElementById("btn-6")


const fullDescription = [
    "The guided boat ride would take around 4-5 hours and can be undertaken in the morning or evening. The start time varies according to the prevalent weather and time of sunrise. During summers it starts around 5 am and in winters it is 6 am in the mornings. Similarly the evening tour commences at 5:30 pm in summers and 4 pm in winters. \nThe ride begins from Assi Ghat and takes you along the stretch of the river where the ghats are located right up to the Adi Keshav Ghat. Apart from getting an opportunity to see the various ghats as you pass by, you would also get to alight the boat at a few places and visit some temples, palaces, mosques depending on your interest. This long ride which starts at the southern end of the ghats and reaches the northern most part of the city is an apt way to view Varanasi from the surface of River Ganga, as you leisurely soak in the sacred ambience.",
    "Varanasi night prayer ceremony also called aarti ceremony is a kind of Hindu way of worship, which is basically an event organized every day to give thanks to river Ganges. Normally Hindu worship is done privately, but this worship [aarti] ceremony is done on the riverbank of Ganges openly and publicly. It is only of its kind, therefore attracts thousands of people daily to witness it. This Hindu ritual of saying thanks is very unique and surreal. It started a few years ago but making its importance rapidly to the world. Almost 90 percent of the tourists who comes to Varanasi attend this prayer ceremony for sure. This grand event start time depends on sunset and therefore vary month to month. It goes for 45 minutes and is very engaging. \nYou will also take a boat ride which will make this once in a lifetime experience even better. The glittering lamps and reverberating chants of the hymns evoke spiritual sentiments as you glide by in the boat.",
    "Located in Varanasi, we offers daily classes and private classes based on the needs of the students. Beginners as well as advanced students are welcome. Our focus is on asana as well as meditation, Pranayama, mudra and mantras. Come practice sunrise yoga with us on the ghats, you'll have a wonderful experience.",
    "First ever air conditioned, luxury river cruise on holy river Ganga in Varanasi. Cruise tour shows all the ghats of Kashi. State of art double story vessel with AC lower deck & roof covered open upper deck. Sofa seating for 60 pax, video documentary on LED TV, continuous light instrumental music, guide. Complimentary bottled water, tea/coffee+cookies. Onboard Bio-Toilet, Safe & Secure."
]


showDescription1.addEventListener('click', ()=> {
    console.log("Description Clicked");
    aman.innerHTML =` <p style="padding:7px">` + fullDescription[0] + `</p>` + `<button id='close'> X </button>`;
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
        aman.innerHTML = "";
    });
    setTimeout(()=> { aman.innerHTML = ""; }, 10000)
})


showDescription2.addEventListener('click', ()=> {
    console.log("Description Clicked");
    aman.innerHTML =` <p style="padding:7px">` + fullDescription[1] + `</p>` + `<button id='close'> X </button>`;
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
        aman.innerHTML = "";
    });
    setTimeout(()=> { aman.innerHTML = ""; }, 10000)
})


showDescription3.addEventListener('click', ()=> {
    console.log("Description Clicked");
    aman.innerHTML =` <p style="padding:7px">` + fullDescription[2] + `</p>` + `<button id='close'> X </button>`;
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
        aman.innerHTML = "";
    });
    setTimeout(()=> { aman.innerHTML = ""; }, 10000)
})


showDescription4.addEventListener('click', ()=> {
    console.log("Description Clicked");
    aman.innerHTML =` <p style="padding:7px">` + fullDescription[3] + `</p>` + `<button id='close'> X </button>`;
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
        aman.innerHTML = "";
    });
    setTimeout(()=> { aman.innerHTML = ""; }, 10000)
})


// showDescription5.addEventListener('click', ()=> {
//     console.log("Description Clicked");
//     aman.innerHTML =` <p style="padding:7px">` + fullDescription[4] + `</p>` + `<button id='close'> X </button>`;
//     const close = document.getElementById('close');
//     close.addEventListener('click', () => {
//         aman.innerHTML = "";
//     });
//     setTimeout(()=> { aman.innerHTML = ""; }, 10000)
// })


// showDescription6.addEventListener('click', ()=> {
//     console.log("Description Clicked");
//     aman.innerHTML =` <p style="padding:7px">` + fullDescription[5] + `</p>` + `<button id='close'> X </button>`;
//     const close = document.getElementById('close');
//     close.addEventListener('click', () => {
//         aman.innerHTML = "";
//     });
//     setTimeout(()=> { aman.innerHTML = ""; }, 10000)
// })

