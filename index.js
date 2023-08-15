const button=document.querySelector(".btn");
const navLinks=document.querySelector(".nav-links-1");
const second=document.querySelector(".second-container");


button.addEventListener("click",() => {

    button.classList.toggle("active");
    navLinks.classList.toggle("active");
  

})