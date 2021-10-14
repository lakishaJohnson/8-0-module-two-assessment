let dropDown = document.querySelector("#dropDown")
let movie = document.querySelector("#movie")
let year = document.querySelector("#year")
let description = document.querySelector("#description")

fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => {
    return response.json();
})
.then((films) => {
    // console.log(films)
    for(let film of films) {
        const option = document.createElement("option")
        option.setAttribute("value", film.title)
        option.textContent = film.title
        dropDown.append(option)
    }
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
    const form = document.querySelector("#submit")
    form.addEventListener("click", (event) => {
        event.preventDefault();
    
        const li = document.createElement("li")
        const input = document.querySelector("form input")
        const ul = document.querySelector("ul")
        li.innerHTML = `<strong>${dropDown.value}:</strong> ${input.value}` 
        ul.append(li)
        input.value = ""
    })
    
})

    
    



            

