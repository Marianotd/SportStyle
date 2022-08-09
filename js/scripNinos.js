// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const carouselProductos = document.getElementById("carouselProductos")

// REVISAR LOCAL STORAGE
usersData = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : localStorage.setItem("usersData", JSON.stringify(usersData))                        

// AÑADIR PRODUCTOS EN CARROUSEL
productos.forEach(producto => {

    if(producto.usuario == "Niños" && producto.disponible == true){
        carouselProductos.innerHTML += `
            <li>
                <div id="producto${producto.id}" class="card border-0 producto producto--niños">
                    <p>${producto.nombre} <br> $${producto.precio}</p>
                    <img class="img img-fluid" src="${producto.img}" alt="${producto.nombre}">
                    <button class="py-1 px-4 rounded">Añadir</button>
                </div>
            </li>
        `
    }
})