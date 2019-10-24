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
    ["Tupac", "This artist was a major Hip-Hop figure in the 1990's. He has created some of the most impactful songs to date with subject matter ranging from oppression, teen pregnancy, poverty, and even braggadocious songs. He was found to be very controversial and referred to as infamous due to the events he was involved in and surrounded by.?", "Images/tupac.jpg"],
    ["Nas", "This artist sold 1 million", "Images/Nas.jpg"],
    ["Biggie", "Notorious Big", "Images/Biggie.jpg"],
    ["Drake", "Drake", "Images/drake.jpg"],
    ["Eminem", "Eminem", "Images/eminem.jpg"],
    ["Jay Z", "Jay Z", "Images/jayz.jpg"],
    ["lil Wayne", "Lil Wayne", "Images/lilwayne.jpg"],
    ["Big L", "Big L", "Images/bigL.jpg"]
]

// Need and input box
//player inputs selection
//store selection value
//  compare stored value to people[i][0]
// if stored value =  people[0] answer = correct
    //else answer = wrong



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

let answerInput = document.querySelector('.typedAnswer')
console.log(answerInput.value)


function validateAnswer() {
    let userAnswer = document.forms["rappersName"].value;
    if (userAnswer == people[i]) {
        alert("You are Correct!")
    }
    else (userAnswer !== people[i]); {
        alert("Maybe you should try again")
    }
}