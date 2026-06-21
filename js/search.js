document.getElementById("search").addEventListener("input",(e)=>{

const v = e.target.value.toLowerCase();

const filtered = movies.filter(m=>
m.title.toLowerCase().includes(v)
);

document.getElementById("row-trending").innerHTML =
filtered.map(m=>`
<div class="card" onclick="openMovie(${m.id})">
<img src="${m.img}">
<p>${m.title}</p>
</div>
`).join("");
});
