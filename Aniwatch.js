
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);// Change image every 3 seconds
}

// Manual navigation
function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}
showSlides();


    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");
    hamburgerBtn.addEventListener("click",function(){
        sidebar.classList.add("open");
        overlay.style.display = "block";
    });   
    closeBtn.addEventListener("click",function(){
        sidebar.classList.remove("open");
        overlay.style.display = ("none");
    });
    overlay.addEventListener("click",function(){
        sidebar.classList.remove("open");
        overlay.style.display = ("none");
    })






    