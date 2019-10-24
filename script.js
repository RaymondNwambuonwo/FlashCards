let back = document.querySelector(".back-face")
let front = document.querySelector(".front-face")
let q = document.querySelector(".q")
let answer = document.querySelector(".a")
let card = document.querySelector(".card")
let previous = document.querySelector("#previous")
let next = document.querySelector("#next")
let question = document.querySelector("#question")
let i = 0

// front.style.background = "url(Images/tupac.jpg)"

let people = [
    ["Tupac", "Who is this artist?", "Images/tupac.jpg"],
    ["Nas", "This artist sold 1 million", "Images/Nas.jpg"],
    ["Biggie", "Notorious Big", "Images/Biggie.jpg"],
    ["Drake", "Drake", "Images/drake.jpg"],
    ["Eminem", "Eminem", "Images/eminem.jpg"],
    ["Jay Z", "Jay Z", "Images/jayz.jpg"],
    ["lil Wayne", "Lil Wayne", "Images/lilwayne.jpg"],
    ["Big L", "Big L", "Images/bigL.jpg"]
]

q.innerText = people[i][0]
question.textContent = people[i][1]
front.style.background = "url("+people[i][2]+") no-repeat"
front.style.backgroundSize = "100% 100%"
next.addEventListener("click", function(evt){
    evt.preventDefault
    i++
    q.innerText = people[i][0]
    question.textContent = people[i][1]
    front.style.background = "url("+people[i][2]+") no-repeat"
    front.style.backgroundSize = "100% 100%"
})

previous.addEventListener("click", function(evt){
    evt.preventDefault
    i--
    q.innerText = people[i][0]
    question.textContent = people[i][1]
    front.style.background = "url("+people[i][2]+") no-repeat"
    front.style.backgroundSize = "100% 100%"
})

card.addEventListener("click", function(evt){
back.classList.toggle("hidden")
front.classList.toggle("hidden")
})