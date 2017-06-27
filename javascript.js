var burger = document.getElementById("hamburger");
var menu = document.getElementById("menu");

burger.addEventListener("click", function() {
    burger.classList.toggle("off");
    menu.classList.toggle("on");
});


//animacje******************************************
$(window).scroll(function(){
   
    var wScroll = $(this).scrollTop();
    
   
    if(wScroll > $('.image-anim').offset().top - ($(window).height()/1.2)) {
      
        $('.image-anim').each(function(i){
            
            setTimeout(function(){  
                $('.image-anim').eq(i).addClass('animation');    
            }, 450 * (i+1));
            
        });
    
    };
    
    if(wScroll > $('.onas').offset().top - ($(window).height()/1.2)) {
         $('.onas').addClass('animation'); 
    };
    
});
//zdjęcia************************************
var imagesMone = document.getElementById("image-one");
var imagesMtwo = document.getElementById("image-two");
var imagesMthree = document.getElementById("image-three");
var openModal = document.getElementById("modal");

imagesMone.addEventListener("click", function() {
    openModal.classList.toggle("modal-on");
});

imagesMtwo.addEventListener("click", function() {
    openModal.classList.toggle("modal-on");
});

imagesMthree.addEventListener("click", function() {
    openModal.classList.toggle("modal-on");
});

var cursorM = document.getElementById("cursor");

cursorM.addEventListener("click", function() {
    openModal.classList.toggle("modal-on");
});

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("my-slides");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
      slides[slideIndex-1].style.display = "block";
}
//recenzje********************************************
var numerRecenzji = 1;
showReview(numerRecenzji);
var tInterval = setInterval(showReview, 7000);

function currentReview(n){
    showReview(numerRecenzji = n);
    clearInterval(tInterval);
    tInterval = setInterval(showReview, 7000);
}

function showReview(n){
    var i;
    var recenzja = document.getElementsByClassName("recenzja");
    var sliderButton = document.getElementsByClassName("slider-button");
    for( i = 0; i < recenzja.length; i++) {
        recenzja[i].style.display = "none";
    }
    for( i = 0; i < sliderButton.length; i++) {
        sliderButton[i].className = sliderButton[i].className.replace(" selected", "");
    }
        
    if (numerRecenzji > recenzja.length) {numerRecenzji = 1};
    recenzja[numerRecenzji-1].style.display = "block";
    sliderButton[numerRecenzji-1].className += " selected";   
    numerRecenzji++;   
}

