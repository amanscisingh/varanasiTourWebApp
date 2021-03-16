const showDescription1 = document.getElementById("btn-1")
const showDescription2 = document.getElementById("btn-2")
const showDescription3 = document.getElementById("btn-3")
const showDescription4 = document.getElementById("btn-4")
// const showDescription5 = document.getElementById("btn-5")
// const showDescription6 = document.getElementById("btn-6")


const fullDescription = [
    "Hindu pilgrims and tourists alike travel for thousands of miles to reach the Shri Kashi Vishwanath Temple, a sacred attraction around four kilometers from the Varanasi Junction railway station near the Manikarnika Ghat. \nThe distinctive design of this temple has gone on to inspire the architecture of hundreds of other temples across India.Strict security measures around the complex require that tourists stash their cameras, phones, bags, and other belongings in a rentable locker nearby. Expect to ditch your shoes and wait in line with hundreds of other visitors, all eager to touch the 60-centimeter-tall, sin-absolving Shiva lingam in a silver alter.",
    "Not only is it located in the heart of the cultural capital of India - Varanasi, but its divinity is multiplied by the holy river Ganga that flows by its side. Banaras Hindu University is hence home to one of the biggest tourist attractions in the city of Varanasi, the grand New Vishwanath Temple. Visiting this temple gives the worshipper the space to put himself in the hands of God, at his disposition, and listen to the voice in his heart. \nThe peace and calm of the temple help you forget the distractions of daily life. The positive aura in the air compels one to surrender himself in the gentle caress of the Almighty. The very famous Jyotirlinga of Shiva, Vishweshwara, is believed to have immense and unending power.",
    "Varanasi is always related to Sankat Mochan Temple and is an essential part of this holy city. Every person visiting Varanasi visits this temple and pay their respects to Hanuman. The laddoo offered at this temple is essentially famous among the locals.While visiting Sankat Mochan be aware of the monkeys who throng the temple premises and tend to steal away the prasad. However, they are totally harmless if you let them be on their own.",
    "Located near the Durga Ghat on the bank of the River Ganga, Durga Temple was built in the 18th century. It houses an imposing idol of Goddess Durga and is one of the main temples in Varanasi."
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

