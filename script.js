//pegando a classe "busca" da index.html
let search = document.querySelector('.search-box');
 document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
 }



//Manipulação de DOM 
let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});



//Faq


const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active")
  })
})

