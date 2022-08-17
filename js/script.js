// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const divProductos = document.getElementById("contProductos")

// ARRAYS 
const users = []
let usersData = []
const contacto = []
const productos = []
let carrito = []

// REVISAR LOCAL STORAGE
usersData = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : localStorage.setItem("usersData", JSON.stringify(usersData))                        
carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : localStorage.setItem("carrito", JSON.stringify(carrito))

// FUNCION MOSTRAR PRODUCTOS EN DOM
async function mostrarProductos() {
    const prodJson = await fetch('json/productos.json')
    const prodParseados = await prodJson.json()

    prodParseados.forEach(producto => {
        // PRODUCTOS PAGINA INDEX
        if(filename() == "index.html" && producto.destacado == true && producto.disponible == true){
            divProductos.innerHTML += `
                <li>
                    <div id="producto${producto.id}" class="card border-0 producto">
                        <p>${producto.nombre} <br> $${producto.precio}</p>
                        <img class="img img-fluid" src="${producto.img}" alt="${producto.nombre}">
                        <label class="labelTalle col-12 mb-2" for="talleCarrito">Seleccione el talle:</label>
                        <select id="talleCarrito" name="talleCarrito" class="col-6 px-2 py-1" required></select>
                        <button class="py-1 px-4 rounded">Añadir</button>
                    </div>
                </li>
            `
        } 
        // PRODUCTOS PAGINA HOMBRE
        else if(filename() == "hombre.html" && producto.usuario == "Hombre" && producto.disponible == true){
            divProductos.innerHTML += `
                <div id="producto${producto.id}" class="card border-0 producto producto__catalogo">
                    <p>${producto.nombre} <br> $${producto.precio}</p>
                    <img class="img img-fluid" src="${producto.img}" alt="${producto.nombre}">
                    <label class="labelTalle col-12 mb-2" for="talleCarrito">Seleccione el talle:</label>
                    <select id="talleCarrito" name="talleCarrito" class="col-6 px-2 py-1" required></select>
                    <button id="botonProducto${producto.id}" class="py-1 px-4 rounded">Añadir</button>
                </div>
            `
        } 
        // PRODUCTOS PAGINA MUJER
        else if(filename() == "mujer.html" && producto.usuario == "Mujer" && producto.disponible == true){
            divProductos.innerHTML += `
                <div id="producto${producto.id}" class="card border-0 producto producto__catalogo producto--mujer ">
                    <p>${producto.nombre} <br> $${producto.precio}</p>
                    <img class="img img-fluid" src="${producto.img}" alt="${producto.nombre}">
                    <label class="labelTalle col-12 mb-2" for="talleCarrito">Seleccione el talle:</label>
                    <select id="talleCarrito" name="talleCarrito" class="col-6 px-2 py-1" required></select>
                    <button id="botonProducto${producto.id}" class="py-1 px-4 rounded">Añadir</button>
                </div>
            `
        } 
        // PRODUCTOS PAGINA NIÑOS
        else if(filename() == "ninos.html" && producto.usuario == "Niños" && producto.disponible == true){
            carouselProductos.innerHTML += `
                <li>
                    <div id="producto${producto.id}" class="card border-0 producto producto--niños">
                        <p>${producto.nombre} <br> $${producto.precio}</p>
                        <img class="img img-fluid" src="${producto.img}" alt="${producto.nombre}">
                        <label class="labelTalle col-12 mb-2" for="talleCarrito">Seleccione el talle:</label>
                        <select id="talleCarritos" name="talleCarrito" class="col-6 px-2 py-1" required></select>
                        <button class="py-1 px-4 rounded">Añadir</button>
                    </div>
                </li>
            `
        }
    }); 

    prodParseados.forEach((producto) => {
        if(document.getElementById(`producto${producto.id}`)){    
            botonAgregarCarrito(producto)
        }
    })
}

// FUNCIÓN LLENAR TALLES
function completarTalles(producto){

}

//FUNCIÓN AÑADIR AL CARRITO
function botonAgregarCarrito(producto){ 
    document.getElementById(`producto${producto.id}`).lastElementChild.addEventListener('click', () => {

        let prodId = producto.id

        if(carrito.some(producto => producto.id == prodId)){
            carrito[producto.cantidad++]
        } else {
            carrito.push(producto)
            producto.cantidad++
        }

        if(carrito !== []){
            localStorage.setItem("carrito", JSON.stringify(carrito.map(producto => producto = {id: producto.id, cant: producto.cantidad})))                        
        }
    
        divCarrito.innerHTML = ""
        divCarrito.innerHTML += `
            <div class="modalCarrito">
                <div class="carritoHeader d-flex flex-row flex-nowrap justify-content-around align-items-center">
                    <h3 class="m-0 p-0">¡Producto añadido al carrito!</h3>
                    <button class="col-2" type="button" onClick="eliminarCarrito(${producto.id})">X</button>
                </div>

                <div class="carritoBody d-flex flex-column align-items-center justify-content-around bg-light py-4 px-1 mt-3">
                    <div class="carritoProducto d-flex flex-row flex-nowrap justify-content-around">
                        <img src="${producto.img}" class="img-fluid col-5" alt="${producto.nombre}">
                        <div class="ps-1">
                            <p>${producto.nombre} <br> <span>$ ${producto.precio}</span></p>
                        </div>
                    </div>

                    <div class="carritoFooter col-12 d-flex flex-column align-items-center justify-content-evenly gap-2 mt-4">
                        <a class="col-10 mx-auto py-2 px-3 bg-black text-decoration-none text-white" href="carrito.html">Ver carrito</a>
                        <button class="col-10 mx-auto py-2 px-3 bg-white text-start" type="button" onClick="seguirComprando(${producto.id})">Añadir y seguir comprando</button>
                    </div>
                </div> 
            </div>
        `

        console.log(document.getElementById(`talleCarrito${producto.id}`))

        divCarrito.classList.add("divModal--show")
        document.body.classList.add("body--modal")

        if(filename() == "index.html"){
            const secOfertas = document.getElementById("secOfertas")
            secOfertas.classList.remove("sticky-top")
        }
    })
}

// FUNCIÓN ELIMINAR DEL CARRITO
function eliminarCarrito(n) {
    const index = carrito.findIndex(producto => producto.id === n);
    carrito.splice(index, 1)
    divCarrito.innerHTML = ""
    divCarrito.classList.remove("divModal--show")
    document.body.classList.remove("body--modal")

    if(filename() == "index.html"){
        secOfertas.classList.add("sticky-top")
    }

    localStorage.setItem("carrito", JSON.stringify(carrito.map(producto => producto = {id: producto.id, cant: producto.cantidad})))                        
}

// FUNCIÓN SEGUIR COMPRANDO
function seguirComprando(n) {
    divCarrito.innerHTML = ""
    divCarrito.classList.remove("divModal--show")
    document.body.classList.remove("body--modal")

    if(filename() == "index.html"){
        secOfertas.classList.add("sticky-top")
    }
}

// OBTENER NOMBRE DE ARCHIVO HTML
function filename(){
    let rutaAbsoluta = self.location.href;   
    let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    let rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length , rutaAbsoluta.length);
    return rutaRelativa;  
}

// CARGAR PRODUCTOS EN EL DOM
mostrarProductos()
