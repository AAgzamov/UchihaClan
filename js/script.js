const headerDiv = document.querySelector("header")
const navDiv = document.querySelector("nav")
const mainDiv = document.querySelector("main")
const footerDiv = document.querySelector("footer")
const quoteDiv = document.querySelector(".quote")

setTimeout( () => {
  headerDiv.style.display = "flex"
  headerDiv.style.animationName = "headerAppear"
  headerDiv.style.animationDuration = "10s";
  headerDiv.style.animationFillMode = "forwards"

  navDiv.style.display = "flex"
  navDiv.style.animationName = "navAppear"
  navDiv.style.animationDuration = "10s";
  navDiv.style.animationFillMode = "forwards"

  mainDiv.style.display = "flex"
  mainDiv.style.animationName = "mainAppear"
  mainDiv.style.animationDuration = "10s";
  mainDiv.style.animationFillMode = "forwards"

  footerDiv.style.display = "flex"
  footerDiv.style.animationName = "nonQuoteAppear"
  footerDiv.style.animationDuration = "10s";
  footerDiv.style.animationFillMode = "forwards"

}, 20000)

setTimeout( () => {
  quoteDiv.style.display = "none"
}, 25000)

// quoteDiv.addEventListener("animationstart", () => {
//   headerDiv.style.display = "flex"
//   navDiv.style.display = "flex"
//   mainDiv.style.display = "flex"
//   footerDiv.style.display = "flex"
//   quoteDiv.style.display = "none"
// })
