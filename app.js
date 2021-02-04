const display = document.getElementById("screen")
const button = document.querySelectorAll(".buttons span")
const buttonArray = Array.from(button);
console.log(buttonArray)
document.querySelectorAll(".operator")[1].innerText = "/"
document.querySelectorAll(".operator")[2].innerText = "*"

function displayMath(button){
    if(button.innerText !== "="){
        display.innerText += button.innerText
   
        console.log(display.innerText)
    };
    if(button.innerText === "="){
        display.innerText = eval
        (display.innerText)
    };
    if(button.innerText === "C"){
        display.innerText = ""
    
    };
}

buttonArray.map(button => button.addEventListener("click", displayMath(button)))
