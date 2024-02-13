const videoWrapper = document.querySelector(".pop-up");
const closeButton = document.querySelector(".close-button");
const videoThumbnail = document.querySelector(".thumbnail");
const iframeVideo = document.querySelector(".iframe-video");

closeButton.addEventListener("click", function(){
    videoWrapper.style.display = "none";
    iframeVideo.setAttribute("src", "https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=0")
})

document.addEventListener("keydown", function(event){
    if(event.key == "Escape"){
        videoWrapper.style.display = "none";
        iframeVideo.setAttribute("src", "https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=0")
    }
})


videoThumbnail.addEventListener("click", function(){
    console.log("-------")
    videoWrapper.style.display = "flex";
    iframeVideo.setAttribute("src", "https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1")
})

