const navToggler = document.querySelector(".menu-toggle");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".menu");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
       nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
       nav.removeAttribute("style");
   }
} 