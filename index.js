const image = document.getElementById('foto-producto')
const titulo = document.getElementById('titulo')
const precio = document.getElementById('precio')
const descripcion = document.getElementById('descripcion')
const categoria = document.getElementById('categoria')
const calificacion = document.getElementById('calificacion')

// Se hace la solicitud para traer la información de un producto 
const data = fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(json=>{
    image.src = json.image;
    titulo.textContent = json.title;
    precio.textContent = json.price;
    descripcion.textContent = json.description;
    categoria.textContent = json.category;
    calificacion.innerHTML = `
    <span>rate: ${json.rating.rate}</span> <br> <span>count: ${json.rating.count}</span>`
})

