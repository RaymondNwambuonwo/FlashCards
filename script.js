let back = document.querySelector(".back-face")
let front = document.querySelector(".front-face")
let question = document.querySelector(".q")
let answer = document.querySelector(".a")
let card = document.querySelector(".card")

let i = 0

front.style.background = "url(Images/tupac.jpg)"

let people = { 
    "tupac": "Tupac Shakur",
    "nas": "Nasir Jones",
    "ti": "Tip Harris",
    "biggie": "Notorious Big",
    "drake": "Drake",
    "eminem": "Eminem",
    "jayz": "Jay Z",
    "migos": "Migos",
    "future": "Future",
}

let peopleFace = {
    imgFile: "/Images/tupac.jpg",
    imgFile2: "/Images/drake.jpg",
}

person = Object.entries(people)
// faces = Object.entries(peopleFace)
question.innerText = person[i][0]
answer.textContent = person[i][1]

card.addEventListener("click", function(evt){
back.classList.toggle("hidden")
front.classList.toggle("hidden")
console.log(person)
})

// card.addEventListener("click", function(evt){
//     front.classList.toggle("hidden")
//     console.log(person)
// })