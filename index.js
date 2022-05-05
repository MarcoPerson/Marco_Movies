const arrows = document.querySelectorAll(".arrow");
const listFilms = document.querySelectorAll(".list-film-wrapper");

arrows.forEach((arrow, index) => {
    const length = listFilms[index].querySelectorAll("img").length;
    const lastItem = listFilms[index].lastElementChild;
    let i = 1;
    arrow.addEventListener("click", () => {
        const viewDimension = window.innerWidth;
        const dimension = lastItem.getBoundingClientRect();
        if(dimension.right > viewDimension ){
            listFilms[index].style.transform = `translateX(${-315 * i++}px)`;
        }else{
            listFilms[index].style.transform = "translateX(0px)";
            i = 0;
        }
    })
})


const toggler = document.querySelector(".navbar-dark-toggle");
const toActive = document.querySelectorAll(".navbar-dark-toggle, .container, .sidebar, .navbar, .navbar-link a, .navbar-profile, .navbar-dark");

toggler.addEventListener("click", () => {
    toActive.forEach(element => {
        element.classList.toggle("active");
    })
})