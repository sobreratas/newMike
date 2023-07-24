
//card observer code


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: .5,
})

cards.forEach(card => {
    observer.observe(card)
})

//hamburger menu code

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//copyright year code

const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear)

year.innerHTML = currentYear;