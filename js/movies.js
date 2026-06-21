let movies = [];

async function loadMovies() {
  const res = await fetch("data/movies.json");
  movies = await res.json();
  renderMovies(movies);
}

function renderMovies(list) {
  const container = document.getElementById("movies");

  container.innerHTML = list.map(m => `
    <div class="movie">
      <img src="${m.img}">
      <h3>${m.title}</h3>
      <p>⭐ ${m.rating}</p>
    </div>
  `).join("");
}
