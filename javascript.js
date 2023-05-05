

let firstinp = document.querySelector(".inp-box")
let oneBtn = document.querySelector(".btn-first")
let twoBtn = document.querySelector(".btn-two")
let threeBtn = document.querySelector(".btn-three")
let fourBtn = document.querySelector(".btn-four")
let inptTwo = document.querySelector(".inp-two")


oneBtn.onclick = () => {
    let inpvalue = firstinp.value
    inptTwo.innerHTML = inpvalue.toUpperCase()
}


twoBtn.onclick = () => {
    let inpvalue = firstinp.value
    inptTwo.innerHTML = `${inpvalue.charAt(0).toUpperCase()}${inpvalue.slice(1)}`
}

threeBtn.onclick = () => {
    let inpvalue = firstinp.value
    inptTwo.innerHTML = inpvalue.toLowerCase()
}

fourBtn.onclick = () => {
    let inpvalue = firstinp.value
    inptTwo.style.textDecoration = "underline";
    inptTwo.innerHTML = inpvalue.toLowerCase()
}



