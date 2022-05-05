const arrows = document.querySelectorAll(".arrow");
const listFilms = document.querySelectorAll(".list-film-wrapper");

arrows.forEach((arrow, index) => {
    const length = listFilms[index].querySelectorAll("img").length;
    const lastItem = listFilms[index].lastElementChild;
    let i = 1;
    arrow.addEventListener("click", () => {
        const viewDimension = window.innerWidth;
        const dimension = lastItem.getBoundingClientRect();
        console.log(dimension.right, viewDimension);
        if(dimension.right > viewDimension ){
            listFilms[index].style.transform = `translateX(${-315 * i++}px)`;
        }else{
            listFilms[index].style.transform = "translateX(0px)";
            i = 0;
        }
        console.table(dimension);
    })
})

