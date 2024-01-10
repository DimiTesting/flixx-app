function trim(string) {
    let result = []
    let finalResult = ""
    for (let i=string.length-1; i>=0; i--) {
        if (string[i]==="/") {
            break
        }
        result.push(string[i])
    }
    finalResult += "/" + result.reverse().join("")
    return finalResult
}

const global = {
    currentPage: trim(window.location.pathname)
}


function highlightActiveLink () {
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
        if (trim(link.getAttribute("href")) === global.currentPage) {
            link.classList.add("active")
        }
    })
}

async function displayPopularMovies() {
    const {results} = await fetchAPIData("movie/popular")
    results.forEach((movie)=> {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
                ${movie.poster_path ? 
                    `<img
                        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                        class="card-img-top"
                        alt="${movie.title}"
                    />` : 
                    `<img
                        src="images/no-image.jpg"
                        class="card-img-top"
                        alt="Movie Title"
                    />`}
            </a>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">
                <small class="text-muted">Release: ${movie.release_date}</small>
                </p>
            </div> `
        document.querySelector("#popular-movies").appendChild(div)
    })

    
}

async function fetchAPIData(endpoint) {
    const API_KEY = "9a81bb366312fe2f0a1edac4c7906ae4"
    const API_URL = "https://api.themoviedb.org/3/"
    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()
    return data
    
}

function init() {
    switch (global.currentPage) {
    case "/":
    case "/index.html":        
        displayPopularMovies()
        break;
    case "/movie.details.html":
        console.log("Movie details")
        break
    case "/tv-details.html":
        console.log("Tv details")
        break
    case "/shows.html":
        console.log("Shows")     
        break
    case "/search.html":
        console.log("Search")
        break
    }

    highlightActiveLink()
}

document.addEventListener("DOMContentLoaded", init)