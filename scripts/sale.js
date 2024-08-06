let data = [
  {
    title: "Smart Watch",
    img: "../image/products/Smart Watch.jpg",
    price: "$299",
    info: "Advanced smartwatch with multiple health tracking features and customizable watch faces.",
  },
  {
    title: "Classic Watch",
    img: "../image/products/Classic Watch.jpg",
    price: "$150",
    info: "Elegant classic watch with leather strap and water-resistant design, perfect for formal occasions.",
  },
  {
    title: "Fitness Tracker",
    img: "../image/products/Fitness Tracker.jpg",
    price: "$99",
    info: "Lightweight fitness tracker with heart rate monitoring and step counting functionality.",
  },
  {
    title: "Digital Watch",
    img: "../image/products/Digital Watch.jpg",
    price: "$50",
    info: "Affordable digital watch with alarm, stopwatch, and backlight features.",
  },
  {
    title: "Luxury Watch",
    img: "../image/products/Luxury Watch.jpg",
    price: "$1200",
    info: "High-end luxury watch with automatic movement and sapphire crystal glass.",
  },

];

function fillData() {
  document.getElementById("data").innerHTML = "";
  
  for (let task of data) {
    let content = `
      <div class="card">
        <img src="${task.img}" alt="Product Image">
        <h1>${task.title}</h1>
        <p class="price">${task.price}</p>
        <p>${task.info}</p>
        <p><button>Add to Cart</button></p>
      </div>
    `;
    document.getElementById("data").innerHTML += content;
  }
}

fillData();
