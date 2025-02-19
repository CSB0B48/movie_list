let movieArray = [];

const movieInput = document.getElementById('movieInput');
const addMovieBtn = document.getElementById('addMovieBtn');
const movieList = document.getElementById('movieList');
const totalMovies = document.getElementById('totalMovies');
const clearListBtn = document.getElementById('clearListBtn');

function updateMovieList() 
{
    movieList.innerHTML = ''; 
    movieArray.forEach((movie, index) => 
{
        const li = document.createElement('li');
        li.textContent = movie;
        li.onclick = () => removeMovie(index); 
        movieList.appendChild(li);
    });
    totalMovies.textContent = movieArray.length; 
}

function addMovie() {
    const movieName = movieInput.value.trim();
    if (movieName !== '') 
{
        movieArray.push(movieName);
        updateMovieList();
    }
    movieInput.value = ''; 

}

function removeMovie(index) {
    movieArray.splice(index, 1);
    updateMovieList();
}

function clearList() {
    movieArray = [];
    updateMovieList();
}

addMovieBtn.addEventListener('click', addMovie);
clearListBtn.addEventListener('click', clearList);
