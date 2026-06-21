document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(value)
  );

  renderMovies(filtered);
});
