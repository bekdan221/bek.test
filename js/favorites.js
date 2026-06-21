function toggleFavorite(id) {
  let fav = JSON.parse(localStorage.getItem("fav")) || [];

  if (fav.includes(id)) {
    fav = fav.filter(f => f !== id);
  } else {
    fav.push(id);
  }

  localStorage.setItem("fav", JSON.stringify(fav));
}

function renderFavorites() {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  const list = movies.filter(m => fav.includes(m.id));

  document.getElementById("favList").innerHTML =
    list.map(m => `<p>${m.title}</p>`).join("");
}
