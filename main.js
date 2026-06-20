const cars = [
    { id: 1, name: "Lexus GX 470", type: "suv", price: "28,500 $" },
    { id: 2, name: "BMW M5 F90", type: "sedan", price: "85,000 $" },
    { id: 3, name: "Toyota Land Cruiser 300", type: "suv", price: "95,000 $" },
    { id: 4, name: "Mercedes-Benz E63", type: "sedan", price: "72,000 $" }
];
let activeCategory = 'all';
function filterCategory(cat) { activeCategory = cat; renderCars(); }
function renderCars() {
    const query = document.getElementById('search').value.toLowerCase();
    const catalog = document.getElementById('catalog');
    const filtered = cars.filter(car => {
        const matchesCat = (activeCategory === 'all' || car.type === activeCategory);
        const matchesName = car.name.toLowerCase().includes(query);
        return matchesCat && matchesName;
    });
    catalog.innerHTML = filtered.length > 0 
        ? filtered.map(car => `
            <div class="car-card">
                <h3>${car.name}</h3>
                <p>Цена: <strong>${car.price}</strong></p>
                <button onclick="alert('Заявка на ${car.name} отправлена!')">Связаться с продавцом</button>
            </div>
        `).join('')
        : '<p style="text-align:center;">Машин по вашему запросу не найдено.</p>';
}
renderCars();
