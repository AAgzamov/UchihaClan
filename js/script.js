// Load page only when everything is loaded.
window.addEventListener("load", () => {

const headerDiv = document.querySelector("header")
const clanDiv = document.querySelector(".clan__name")
const navDiv = document.querySelector("nav")
const lifeLessonDiv = document.querySelector(".life__lesson")
const mainDiv = document.querySelector("main")
const footerDiv = document.querySelector("footer")
const quoteDiv = document.querySelector(".quote")
const images = document.querySelectorAll("img")
const backgroundMusic = new Audio("./audio/Naruto Shippuden Hurricane Suite.mp3")
const playButtonDiv = document.querySelector("#playButton")
backgroundMusic.setAttribute("preload", "auto")
backgroundMusic.setAttribute("loop", true)

playButtonDiv.addEventListener("click", () => {
  playButtonDiv.style.visibility = "hidden"
  const playAudio = setInterval( () => {
    if(backgroundMusic.readyState === 3 || backgroundMusic.readyState === 4){
      backgroundMusic.play()
      clearInterval(playAudio)
    }

  }, 100)
})

setTimeout( () => {
  headerDiv.style.display = "flex"
  headerDiv.style.animationName = "headerAppear"
  headerDiv.style.animationDuration = "10s"
  headerDiv.style.animationFillMode = "forwards"

  clanDiv.style.display = "flex"
  clanDiv.style.animationName = "divClanAppear"
  clanDiv.style.animationDuration = "10s"
  clanDiv.style.animationFillMode = "forwards"

  navDiv.style.display = "flex"
  navDiv.style.animationName = "navAppear"
  navDiv.style.animationDuration = "10s"
  navDiv.style.animationFillMode = "forwards"

  lifeLessonDiv.style.display = "block"
  lifeLessonDiv.style.animationName = "mainAppear"
  lifeLessonDiv.style.animationDuration = "10s"
  lifeLessonDiv.style.animationFillMode = "forwards"

  mainDiv.style.display = "flex"
  mainDiv.style.animationName = "mainAppear"
  mainDiv.style.animationDuration = "10s"
  mainDiv.style.animationFillMode = "forwards"

  footerDiv.style.display = "flex"
  // footerDiv.style.animationName = "nonQuoteAppear"
  footerDiv.style.animationName = "footerAppear"
  footerDiv.style.animationDuration = "10s"
  footerDiv.style.animationFillMode = "forwards"

}, 20000)

setTimeout( () => {
  quoteDiv.style.display = "none"
}, 25000)

images.forEach((item, i) => {
  item.addEventListener("dragstart", (event) => {
    event.preventDefault()
  })
});

document.addEventListener("contextmenu", () => {
  event.preventDefault()
})

})
