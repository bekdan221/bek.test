function render(list){
  const c=document.getElementById("catalog");
  c.innerHTML="";

  list.forEach(car=>{
    c.innerHTML+=`
      <div class="card" onclick="openCar('${car.id}')">
        <img src="${car.img}">
        <h3>${car.name}</h3>
        <p>${car.price}</p>
      </div>
    `;
  });
}

function show(brand){
  if(brand==="ALL") render(cars);
  else render(cars.filter(c=>c.brand===brand));
}

function openCar(id){
  location.href="car.html?id="+id;
}

render(cars);
