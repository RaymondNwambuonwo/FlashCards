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
    ["Tupac", "This artist was a major Hip-Hop figure in the 1990's. He has created some of the most impactful songs to date with subject matter ranging from oppression, teen pregnancy, poverty, and even the occasional braggadocious songs. He was found to be very controversial and at times referred to as infamous due to the events he was involved in and surrounded by. A legend in his own right, who is this?", "Images/tupac.jpg"],
    ["Nas", "This artist hails from Queens, NY and played a crutial part in the resurgence of New York/Eastcoast rap during the early 90's. With his first album painting a vivid picture of what it was like to live in New York City, especially in housing projects. He has gone on to make history, having released multiple bodies of work, multiple investments, and even settling a feud with another fellow NYC Hip-Hop legend. Who is this? ", "Images/Nas.jpg"],
    ["Biggie", "To many people he was one of, if not the best rapper to ever pick up a microphone and single handedly brought New York back to the front lines of Hip-Hop with his debut album Ready To Die. With legendary hits like Juicy, One More Chance, and Hypnotize, he is undeniably one of the greatest to ever do it. Who is this?", "Images/Biggie.jpg"],
    ["Drake", "Often considered to be the greatest of the new generation, he made it cool for an artist to rap and sing. This artist has consistently been on the billboard for 10 years now, making hit after hit. Considered to have also changed the approach and idea of what a traditional mixtape was, with his breakout mixtape So Far Gone. He is also an actor, which he did first before music. Ladies love him and guys want to be him. Who is this? ", "Images/drake.jpg"],
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

const answerInput = document.querySelector('.answerSelect')
// console.log(answerInput.value)

answerInput.addEventListener("submit", function(evt) {
    evt.preventDefault(); 
    console.log(evt.target.elements[0].value);
})

// function validateAnswer(evt) {
//     evt.preventDefault
//     let userAnswer = document.forms["rappersName"].value;
//     if (userAnswer == people[i][1]) {
//         alert("You are Correct!")
//     }
//     else (userAnswer !== people[i][1]); {
//         alert("Maybe you should try again")
//     }
//     console.log(people[i][1])
// }