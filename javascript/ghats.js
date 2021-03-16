const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
// const showDescription5 = document.getElementById("btn-5")
// const showDescription6 = document.getElementById("btn-6")


const fullDescription = [
    "When it comes to famous places in Varanasi, the city's southernmost main ghat regularly tops the list. Assi Ghat's star attraction is a Shiva lingam (phallic representation of the Hindu deity) beneath a sacred fig tree. It draws hundreds of pilgrims every day, who come to worship Lord Shiva after rinsing in the Ganges River. \nFeeling a little stiff from traveling? Swing by Assi Ghat at sunrise, when you can get your downward-facing dog on with dozens of others during morning yoga accompanied by live music every day. Tourists can also see another Ganga Aarti performance here in the evening, which is slightly smaller and more intimate than the one at Dasaswamedh Ghat",
    "Plumes of smoke swirl toward the sky at Manikarnika Ghat. No, it's not from a factory — it's from the perpetual cremations that happen on this ghat. \nPriests or guides frequently offer to lead tourists through the fascinating ghat, however some can be aggressive in their demands for money. You may see doms (members of an untouchable caste) carrying cloth-wrapped bodies on makeshift stretchers, along with piles of firewood stacked up, ready to feed the pyre.",
    "Kedar Ghat is one of the oldest Ghats in Varanasi and is considered cleaner for bathing in the holy River Ganga and offering prayers to Lord Shiva at the Kedareshwar Temple. It is often visited for the beautiful surroundings and the spiritual vibe.",
    "The lively atmosphere of the Dasaswamedh Ghat makes it one of the best places to visit in Varanasi. This tourist attraction is a swirling hodgepodge of flower sellers touting bright blossoms, boat operators hawking rides along the Ganges River, and sadhus (holy men) with face paint."
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

