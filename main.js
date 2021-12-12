// window.addEventListener('scroll', ()=>{
//     let content = document.querySelector('.container');
//     let contentPosition = content.getBoundingClientRect().top; 
//     let screenPosition = window.innerHeight;
//     if(contentPosition<screenPosition) {
//        alert("edc")
//         content.classList.add('active');}
//     else {content.classList.remove('active')}
    

// })


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

// navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementByClass("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    alert("ew")
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}