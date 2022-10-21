let favm = document.getElementById("movie-detail");
// here we will write function when user click on detail button and we will fetch current movie saved in local storage and display it.
function renderMovie() {
  let movieList = document.querySelector("#movie-detail");
  if (movieList) movieList.innerHTML = "";
  let favmovie = localStorage.getItem("current_movie");
  console.log(favmovie);
  let savedMovie = JSON.parse(favmovie);
  if (savedMovie == null) {
    favmovie = [];
  } else {
    
      const avatar = savedMovie.Title;
      const imgsrc = savedMovie.Poster;
      const plot = savedMovie.Plot;
      const released = savedMovie.Released;
      const imdb = savedMovie.imdbRating;
      favm.innerHTML += `
      <div class="container-movie">
      <div class="card cen" style="width: 25rem;">
      <img src="${imgsrc}" class="card-img-top  img-mov  " alt="...">
      <div class="card-body">
        <h5 class="card-title">Title: ${avatar}</h5>
        <p class="card-text">Plot: ${plot}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">All Rating : ${imdb}</li>
        <li class="list-group-item">Released time : ${released}</li>
       
      </ul>
      
    </div>
    </div>`;

      
      
    
  }
}
renderMovie();