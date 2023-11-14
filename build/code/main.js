
window.addEventListener("scroll", () => {
   const header = document.querySelector(".header")
   const windowScroll = window.scrollY

   if(windowScroll > 590){
       header.classList.remove("visible")
   } else{
      header.classList.add("visible")
   }

})
