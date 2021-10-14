fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => {
    return response.json();
})
.then((films) => {
    // console.log(films)
    let dropDown = document.querySelector("#dropDown")

    for(let film of films) {
        const option = document.createElement("option")
        option.setAttribute("value", film.title)
        option.textContent = film.title
        dropDown.append(option)
    }
    let movie = document.querySelector("#movie")
    let year = document.querySelector("#year")
    let description = document.querySelector("#description")

    let selected = ""

    dropDown.addEventListener("change", () => {
        for (let film of films) {
            if(dropDown.value === film.title) {
                selected = film
                //console.log(film)

                movie.textContent = film.title;
                year.textContent = film.release_date;
                description.textContent = film.description
            }
        }
    })
    const form = document.querySelector("form")
    form.addEventListener("click", (event) => {
        event.preventDefault();
        
        const ul = document.querySelector("ul")
        const li = document.createElement("li")
        ul.append(li)
        li.innerHTML = `<strong><b>${dropDown.value}:</strong></b> ${event.target.review.value}`
    })
})