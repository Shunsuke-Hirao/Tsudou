let body=document.querySelector("body");
let toggle=document.querySelector(".toggle-btn");
let nav=document.querySelector("#navlist");
let hide=document.querySelector("#hide");


// header
toggle.onclick=()=>{
    nav.classList.toggle("open");
}
hide.onclick=()=>{
    nav.classList.toggle("open");
} 

//index.html
//animation for main images 
let currentIndex = 0;
const images = document.querySelectorAll('.img');
function nextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
setTimeout(() => {  // show the first-image with 0 sec 
    nextImage();     // display the first
    setInterval(nextImage, 4000); // after that, display images each 4 sec.
}, 0);
