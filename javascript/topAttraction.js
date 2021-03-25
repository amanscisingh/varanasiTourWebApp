const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
const showDescription5 = document.getElementById("btn-5")
const showDescription6 = document.getElementById("btn-6")


const fullDescription = [
    "Hindus come to Varanasi from all around the world to purify themselves in the holy Ganges water and perform rituals along the dozens of ghats along the river. For tourists, the river helps provide a fixed point of orientation for navigating around the city, and you'll no doubt spend lots of time sightseeing and watching life happen around the Ganges. \nIn the afternoon or early evening, one of the top things to do in Varanasi is purchase a small floating offering filled with fresh flowers and a candle, and release it onto the Ganges River. The blissful experience will connect you more deeply with Hindu culture and stay in your mind for years to come.",
    "Hindu pilgrims and tourists alike travel for thousands of miles to reach the Shri Kashi Vishwanath Temple, a sacred attraction around four kilometers from the Varanasi Junction railway station near the Manikarnika Ghat. \nThe distinctive design of this temple has gone on to inspire the architecture of hundreds of other temples across India.Strict security measures around the complex require that tourists stash their cameras, phones, bags, and other belongings in a rentable locker nearby. Expect to ditch your shoes and wait in line with hundreds of other visitors, all eager to touch the 60-centimeter-tall, sin-absolving Shiva lingam in a silver alter.",
    "When it comes to famous places in Varanasi, the city's southernmost main ghat regularly tops the list. Assi Ghat's star attraction is a Shiva lingam (phallic representation of the Hindu deity) beneath a sacred fig tree. It draws hundreds of pilgrims every day, who come to worship Lord Shiva after rinsing in the Ganges River. \nFeeling a little stiff from traveling? Swing by Assi Ghat at sunrise, when you can get your downward-facing dog on with dozens of others during morning yoga accompanied by live music every day. Tourists can also see another Ganga Aarti performance here in the evening, which is slightly smaller and more intimate than the one at Dasaswamedh Ghat",
    "Not only is it located in the heart of the cultural capital of India - Varanasi, but its divinity is multiplied by the holy river Ganga that flows by its side. Banaras Hindu University is hence home to one of the biggest tourist attractions in the city of Varanasi, the grand New Vishwanath Temple. Visiting this temple gives the worshipper the space to put himself in the hands of God, at his disposition, and listen to the voice in his heart. \nThe peace and calm of the temple help you forget the distractions of daily life. The positive aura in the air compels one to surrender himself in the gentle caress of the Almighty. The very famous Jyotirlinga of Shiva, Vishweshwara, is believed to have immense and unending power.",
    "The 18th-century sandstone fort and palace is no longer used as a defensive structure, but instead houses a quirky museum brimming with vintage automobiles, elaborate hookahs, antique weapons, sedan chairs decked out in jewels, and a one-of-a-kind astronomical clock that's more than 150 years old.",
    "Alamgir Mosque is a 17th century structure built by Mughal Emperor, Aurangzeb, on a land which once had a Shiva Temple and was demolished by him. The mosque is an architecturally stunning building built according to the Indo-Islamic style with beautiful minarets and high domes."
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


showDescription5.addEventListener('click', ()=> {
    console.log("Description Clicked");
    aman.innerHTML =` <p style="padding:7px">` + fullDescription[4] + `</p>` + `<button id='close'> X </button>`;
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
        aman.innerHTML = "";
    });
    setTimeout(()=> { aman.innerHTML = ""; }, 10000)
})


showDescription6.addEventListener('click', ()=> {
    console.log("Description Clicked");
    aman.innerHTML =` <p style="padding:7px">` + fullDescription[5] + `</p>` + `<button id='close'> X </button>`;
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
        aman.innerHTML = "";
    });
    setTimeout(()=> { aman.innerHTML = ""; }, 10000)
})
