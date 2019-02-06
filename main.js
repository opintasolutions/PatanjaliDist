
const arr = ["images/2.jpg", "images/3.jpg", "images/1.jpg"] 

let button = document.getElementById("slide-button")
  
window.setInterval(() => button.click(), 2200)

let carouselImage = document.getElementById("carousel-slider")

button.addEventListener("click", function(){
    let imageNameArr = carouselImage.src.split("/")
    let imageName = `images/${imageNameArr[imageNameArr.length - 1]}`
    let currIndex = arr.indexOf(imageName)
    if(currIndex === 2){ carouselImage.src = arr[0] }
    else{ carouselImage.src = arr[currIndex + 1] }
})

let popupMessage = document.getElementById("popup-message")
let popupSnoozeBtn = document.getElementById("popup-snooze-btn")

let popup = () => setTimeout(() => {
    popupMessage.style.display = "block"; 
    popupSnoozeBtn.style.display = "block"; 
}, 8000) 

window.onload = popup()

popupSnoozeBtn.addEventListener("click", () => {
   console.log("snoozed")
   popupMessage.style.display = "none";
   popupSnoozeBtn.style.display = "none";
   popup()
})

