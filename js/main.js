// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let  header = document.getElementById("myHeader");
let image = document.getElementById("myImg")
let ellipse = document.getElementById("myEllipse")

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (scrollY> sticky + 200) {
    header.classList.add("sticky");
    image.classList.add ("scroll");
    ellipse.classList.add ("elipse-scroll");
  } if (scrollY < sticky + 1) {
    header.classList.remove("sticky");
    image.classList.remove("scroll");
    ellipse.classList.remove ("elipse-scroll");
  }
}