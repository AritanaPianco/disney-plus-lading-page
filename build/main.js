
// window.addEventListener("scroll", () => {
//    const header = document.querySelector(".header")
//    const windowScroll = window.scrollY

//    if(windowScroll > 590){
//        header.classList.remove("visible")
//    } else{
//       header.classList.add("visible")
//    }

// })


const target = document.querySelectorAll(".btn")
const lista = document.querySelectorAll(".lista")

target.forEach((target) => {

   target.addEventListener("click", () => {
      lista.forEach((lista) => {
         console.log(target)
         console.log(lista)
         if(target.id === lista.id){
              const irmao = target.nextElementSibling
              lista.classList.toggle("hidden")
              irmao.style.maxHeight = irmao.scrollHeight + 'px';
         }else{
              return;
           }   
          
      })
   })
     
})



