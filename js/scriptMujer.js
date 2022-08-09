// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const divProductos = document.getElementById("contProductos")

// REVISAR LOCAL STORAGE
usersData = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : localStorage.setItem("usersData", JSON.stringify(usersData))                        

// AÑADIR PRODUCTOS
productos.forEach(producto => {

    if(producto.usuario == "Mujer" && producto.disponible == true){
        divProductos.innerHTML += `
            <div id="producto${producto.id}" class="card border-0 producto producto__catalogo producto--mujer ">
                <p>${producto.nombre} <br> $${producto.precio}</p>
                <img class="img img-fluid" src="${producto.img}" alt="${producto.nombre}">
                <button class="py-1 px-4 rounded">Añadir</button>
            </div>
        `
    }
})