// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const divProductos = document.getElementById("contProductos")
const divCarrito = document.querySelector(".divModal")

//FUNCIÓN AÑADIR AL CARRITO
function agregarCarrito(producto){   
    document.getElementById(`producto${producto.id}`).lastElementChild.addEventListener('click', () => {

        let prodId = producto.id

        if(carrito.some(producto => producto.id == prodId)){
            carrito[producto.cantidad++]
        } else {
            carrito.push(producto)
            producto.cantidad++
        }

        localStorage.setItem("carrito", JSON.stringify(carrito.map(producto => producto = {id: producto.id, cant: producto.cantidad})))                        
    
        divCarrito.innerHTML = ""
        divCarrito.innerHTML += `
            <div class="modalCarrito d-flex flex-column justify-content-around align-items-center mx-auto">
                <div id="carrito${producto.id}" class="card border-warning mb-3" style="max-width: 20rem;">
                    <div class="card-header" style="font-size: 1.3rem;">${producto.nombre}</div>
                    <button class="btn btn-secondary" onClick="eliminarCarrito(${producto.id})">X</button>
                    <div class="card-body">
                        <p class="card-text">$${producto.precio}</p>
                        <p>Cantidad: ${producto.cantidad}</p>  
                    </div>
                </div>
            </div>
        `

        divCarrito.classList.add("divModal--show")
        document.body.classList.add("body--modal")

        const ofertas = document.querySelector(".bg-warning")
        ofertas.classList.remove("sticky-top")
    })
}

// AGREGAR EVENTO AÑADIR AL CARRITO A PRODUCTOS
productos.forEach((producto) => {    
    if(document.getElementById(`producto${producto.id}`)){        
        agregarCarrito(producto)
    }
})

function eliminarCarrito(n) {
    const index = carrito.findIndex(producto => producto.id === n);
    carrito.splice(index, 1)
    document.getElementById(`carrito${n}`).remove()
    ofertas.classList.add("sticky-top")

    divCarrito.classList.remove("divModal--show")
    document.body.classList.remove("body--modal")

    localStorage.setItem("carrito", JSON.stringify(carrito.map(producto => producto = {id: producto.id, cant: producto.cantidad})))                        
}