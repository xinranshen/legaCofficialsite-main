// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.container');
//     let contentPosition = content.getBoundingClientRect().top; 
//     let screenPosition = window.innerHeight;
//     if(contentPosition<screenPosition) {
//        alert("edc")
//         content.classList.add('active');}
//     else {content.classList.remove('active')}
    

// })

// reveal elements on scroll: https://morioh.com/p/3810e5b07682
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  
  for(var i = 0; i < reveals.length; i++){

   var windowheight = window.innerHeight;
   var revealtop = reveals[i].getBoundingClientRect().top;
   var revealpoint = 150;

   if(revealtop < windowheight - revealpoint){
     reveals[i].classList.add('active');
   }
   else{
     reveals[i].classList.remove('active');
   }
 }
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
   
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  
}


function btnalert() {
  alert("Sorry Web 3.0 people, your technology doesn't support showing this hologram file!");
}




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// $("category2").click(function() {
//   $('html,body').animate({
//       scrollTop: $(".inspect reveal").offset().top},
//       'slow');
// });

// function scrollFunction1() {
//   let e = document.getElementById("three");
//   e.scrollIntoView({
//     block: 'end',
//     behavior: 'smooth',
//     inline: 'start'
//   });
// }
// function scrollFunction2() {
//   let e = document.getElementById("three");
//   e.scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//     inline: 'start'
//   });
  // let e = document.getElementById("two");
  // // This ends the block to the window 
  // // bottom and also aligns the view to the center 
  // e.scrollIntoView({
  //   block: 'end',
  //   behavior: 'smooth',
  //   inline: 'center'
  // });


  $('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        },800);
    }
  });
 
  $("a").click(function(){
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
  });