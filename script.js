//=============================NAVIGATION BAR=================================================================================

const navContainer = document.getElementById("navbar-container");

if(navContainer){

   navContainer.innerHTML =`
      <nav>
      <button class="menu-toggle">☰</button>
      <ul class="navbar">
        <li class="nav-links">
          <a href="index.html" >Home</a></li>
        <li><a href="about.html">About me</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="index.html#contact">Contact</a></li>
      </ul>
    </nav>
    `;
}
//HAMBURGER MENU

const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar){
 menuBtn.addEventListener("click", () =>{
   console.log("clicked");
   navbar.classList.toggle("show");
});
}

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

   const linkPage = link.getAttribute("href");

   if(linkPage === currentPage){
      link.classList.add("active");
   }
});



// HIRE ME BUTTON LINK

console.log("script loaded");
const hireMe = document.querySelector(".hireme");

if (hireMe){
   hireMe.addEventListener("click", function(){
      document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
         });
      })
}

//DISCOVER MY JOURNEY
const discoverBtn = document.querySelector(".discover")

if(discoverBtn){
   discoverBtn.addEventListener("click", function(){
      window.location.href = "about.html"
   })
}



//VIEW  ALL PROJECTS


const projectsBtn = document.querySelector(".view-all-p")

if(projectsBtn){
   projectsBtn.addEventListener("click", function(){
      window.location.href = "projects.html"
   })
}


//VIEW SASSA CASE STUDY


const sassaBtn = document.querySelector(".view-casestudy-sassa")

if(sassaBtn){
   sassaBtn.addEventListener("click", function(){
      window.location.href = "sassa.html"
   })
}

//VIEW PRODEMIC CASESTUDY

const prodemicBtn = document.querySelector(".view-casestudy-prodemic")

if(prodemicBtn){
   prodemicBtn.addEventListener("click", function(){
      window.location.href = "prodemic.html"
   })
}




    //VIEW E-COMMERCE CASE STUDY

const ecommerceBtn = document.querySelector(".view-casestudy-e-commerce")

if(ecommerceBtn){
   ecommerceBtn.addEventListener("click", function(){
      window.location.href = "e-commerce.html"
   })
}



//SCROLL UP BUTTON
const scrollBtn = document.getElementById("scroll-up")

if(scrollBtn){


document.addEventListener("scroll", () =>{

   if (window.scrollY > 500){
      scrollBtn.style.display = "block";
   }
   else{
      scrollBtn.style.display = "none";
   }
});

scrollBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});
}

//======================================================================FORM VALIDATION====================================================================
                                                              
const form = document.querySelector(".input-field");

if(form){
   form.addEventListener("submit", function(e){

      const name = document.querySelector('input[placeholder="Your name"]');
      const email = document.querySelector('input[placeholder="Your Email address"]');
      const subject = document.querySelector('input[placeholder="Subject"]');
      const message = document.querySelector(".message")

      if(
         name.value ===  "" ||
         email.value ===  "" ||
         subject.value === "" ||
         message.value ===  "" 
      ){

         e.preventDefault();
         alert("Please complete all fields");
      }
      else{

         e.preventDefault();

         const popup = document.getElementById("success-popup")
         popup.style.display = "block";

         setTimeout(() => {
            popup.style.display = "none";
         }, 3000);
      }



   });
}





