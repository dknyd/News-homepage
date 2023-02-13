// ILLUSTRATION SOURCE HANDLING
const mainIllustration1 = document.querySelector(".mainIllustration1")
if (window.innerWidth > 1000){
    mainIllustration1.src = "assets/images/image-web-3-desktop.jpg"
}

if (window.innerWidth < 1000){
    mainIllustration1.src = "assets/images/image-web-3-mobile.jpg"
}



