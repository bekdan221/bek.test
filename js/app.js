function card(m){
return `
<div class="card" onclick="openMovie(${m.id})">
<img src="${m.img}">
<p>${m.title}</p>
</div>`;
}

function render(){
document.getElementById("hero").innerHTML =
"🔥 Featured: " + movies[Math.floor(Math.random()*movies.length)].title;

document.getElementById("row-trending").innerHTML = movies.slice(0,10).map(card).join("");
document.getElementById("row-action").innerHTML = movies.filter(m=>m.cat==="action").map(card).join("");
document.getElementById("row-scifi").innerHTML = movies.filter(m=>m.cat==="sci-fi").map(card).join("");
}

function setCategory(cat){
const list = cat==="all" ? movies : movies.filter(m=>m.cat===cat);
document.getElementById("row-trending").innerHTML = list.map(card).join("");
}

function openMovie(id){
const m = movies.find(x=>x.id===id);
localStorage.setItem("movie",JSON.stringify(m));
location.href="movie.html";
}

render();
