// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const divProductos = document.getElementById("contProductos")
const registerForm = document.getElementById("registerForm")
const contactForm = document.getElementById("contactForm")
const modal = document.querySelector(".divModal")
const registerEmail = document.getElementById("registerEmail")
const labelEmail = document.getElementById("labelEmail")
const btnTerms = document.getElementById("btnTerms")
const btnPol = document.getElementById("btnPol")
const infoTotal = document.getElementById("infoTotal")
const resCompra = document.getElementById("resCompra")
const botonCarrito = document.getElementById("botonCarrito")
const bodyCarrito = document.getElementById("bodyCarrito")

// CLASES
class User {
    constructor(email, password, name, surname, birthday, country, gender, sesionActive){
        this.email = email
        this.password = password
        this.name = name
        this.surname = surname
        this.birthday = birthday
        this.country = country
        this.gender = gender
        this.sesionActive = sesionActive
    }
}

class Contacto {
    constructor(email, name, surname, tel, mesage) {
        this.email = email
        this.name = name
        this.surname = surname
        this.tel = tel
        this.mesage = mesage
    }
}

class Direccion {
    constructor(name, surname, street, number, floor, departament, cp, province, location, tel) {
        this.name = name
        this.surname = surname
        this.street = street
        this.number = number
        this.floor = floor
        this.departament = departament
        this.cp = cp
        this.province = province
        this.location = location
        this.tel = tel
    }
}

// ARRAYS y VARIABLES
let datForm
const users = []
let usersData = []
const contacto = []
let carrito = []
let subTotal, total, IVA
const talleRopa = ["XS", "S", "M", "L", "XL", "XXL"]
const talleCalzadoMujer = [35, 36, 37, 38, 39, 40, 41]
const talleCalzadoHombre = [38, 39, 40, 41, 42, 43, 44, 45, 46]
const talleCalzadoNinos = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ,31, 32, 33, 34, 35, 36, 37, 38]

// REVISAR LOCAL STORAGE
usersData = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : localStorage.setItem("usersData", JSON.stringify(usersData))                        
carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : localStorage.setItem("carrito", JSON.stringify(carrito))

// OBTENER NOMBRE DE ARCHIVO HTML
function filename(){
    let rutaAbsoluta = self.location.href;   
    let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    let rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length , rutaAbsoluta.length);
    return rutaRelativa;  
}

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
                        <label id="labelTalle${producto.id}" class="labelTalle col-12 mb-2" for="talleProducto">Seleccione el talle:</label>
                        <select id="talleProducto${producto.id}" name="talleProducto" class="col-10 ps-3 py-2 mb-3" required></select>
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
                    <label id="labelTalle${producto.id}" class="labelTalle col-12 mb-2" for="talleProducto">Seleccione el talle:</label>
                    <select id="talleProducto${producto.id}" name="talleProducto" class="col-10 ps-3 py-2 mb-3" required></select>
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
                    <label id="labelTalle${producto.id}" class="labelTalle col-12 mb-2" for="talleProducto">Seleccione el talle:</label>
                    <select id="talleProducto${producto.id}" name="talleProducto" class="col-10 ps-3 py-2 mb-3" required></select>
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
                        <label id="labelTalle${producto.id}" class="labelTalle col-12 mb-2" for="talleProducto">Seleccione el talle:</label>
                        <select id="talleProducto${producto.id}" name="talleProducto" class="col-10 ps-3 py-2 mb-3" required></select>
                        <button class="py-1 px-4 rounded">Añadir</button>
                    </div>
                </li>
            `
        }
    }); 
    // AGREGAR FUNCIÓN A  BOTONES DE AÑADIR - COMPLETAR SELECT DE TALLES
    prodParseados.forEach((producto) => {
        if(document.getElementById(`producto${producto.id}`)){    
            botonAgregarCarrito(producto)
            if(filename() !== "carrito.html"){
                completarTalles(producto)
            }
        }
    })
}

// FUNCIÓN LLENAR SELECT DE TALLES
function completarTalles(producto){
    const selectProductos = document.getElementById(`talleProducto${producto.id}`)
    const labelTalle = document.getElementById(`labelTalle${producto.id}`)

    selectProductos.innerHTML = `
        <option value="" disabled selected>Seleccione un talle</option>
    `

    // COMPLETADO SELECT TALLES - ROPA
    if(producto.categoria !== "Accesorio"){
        if(producto.categoria !== "Calzado" && producto.categoria !== null){
            talleRopa.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        } 
        // COMPLETADO SELECT TALLES - CALZADO MUJER
        else if(producto.categoria == "Calzado" && producto.categoria !== null && producto.usuario == "Mujer"){
            talleCalzadoMujer.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        } 
        // COMPLETADO SELECT TALLES - CALZADO HOMBRE
        else if(producto.categoria == "Calzado" && producto.categoria !== null && producto.usuario == "Hombre"){
            talleCalzadoHombre.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        } 
        // COMPLETADO SELECT TALLES - CALZADO NIÑOS
        else if(producto.categoria == "Calzado" && producto.categoria !== null && producto.usuario == "Niños"){
            talleCalzadoNinos.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        }
    } 
    // SELECT TALLES - ACCESORIOS
    else {
        selectProductos.classList.add("d-none")
        labelTalle.classList.add("d-none")
    }
}

//FUNCIÓN AÑADIR AL CARRITO
function botonAgregarCarrito(producto){ 
    document.getElementById(`producto${producto.id}`).lastElementChild.addEventListener('click', () => {
        const selectProductos = document.getElementById(`talleProducto${producto.id}`)
        
        if(filename() !== "carrito.html"){
            if(selectProductos.value !== "" || selectProductos.classList.contains("d-none")){
                producto.talle = selectProductos.value
    
                // PRIMER PUSH EN CARRITO VACIO
                if(carrito.length == 0){
                    carrito.push(producto)
                    producto.cantidad++
                } else {
                    // PRODUCTO YA EXISTENTE EN CARRITO
                    if(carrito.some(prod => prod.id == producto.id)){
                        carrito[producto.cantidad++]
                        carrito[producto.talle] = selectProductos.value
                    } 
                    // AGREGADO DE PRODUCTO NUEVO EN CARRITO
                    else {
                        carrito.push(producto)
                        producto.cantidad++
                    }
                }
    
                localStorage.setItem("carrito", JSON.stringify(carrito))                        
            
                // LLENAR MODAL CARRITO
                divCarrito.innerHTML = `
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
                                    <p>Talle: ${producto.talle}</p>
                                </div>
                            </div>
        
                            <div class="carritoFooter col-12 d-flex flex-column align-items-center justify-content-evenly gap-2 mt-4">
                                <a class="col-10 mx-auto py-2 px-3 bg-black text-decoration-none text-white" href="carrito.html">Ver carrito</a>
                                <button class="col-10 mx-auto py-2 px-3 bg-white text-start" type="button" onClick="seguirComprando(${producto.id})">Añadir y seguir comprando</button>
                            </div>
                        </div> 
                    </div>
                `
    
                divCarrito.classList.add("divModal--show")
                document.body.classList.add("body--modal")
                selectProductos.classList.remove("talleIncorrecto")
                selectProductos.value = ""
    
                // OCULTAR ELEMENTO OFERTAS EN INDEX
                if(filename() == "index.html"){
                    const secOfertas = document.getElementById("secOfertas")
                    secOfertas.classList.remove("sticky-top")
                }
            } 
            // TALLE SELECCIONADO NO VÁLIDO
            else {
                selectProductos.classList.add("talleIncorrecto")
                setTimeout(() => {
                    selectProductos.classList.remove("talleIncorrecto")
                }, 3000);
            }
        }
    })
}

// FUNCIÓN ELIMINAR DEL CARRITO - MODAL
function eliminarCarrito(n) {
    const index = carrito.findIndex(producto => producto.id === n);
    carrito.splice(index, 1)

    divCarrito.innerHTML = ""
    divCarrito.classList.remove("divModal--show")
    document.body.classList.remove("body--modal")

    if(filename() == "index.html"){
        secOfertas.classList.add("sticky-top")
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))                          
}

// FUNCIÓN ELIMINAR DEL CARRITO - PAGINA CARRITO
function eliminarPageCarrito(n) {
    const index = carrito.findIndex(producto => producto.id === n);
    carrito.splice(index, 1)

    let divProducto = document.getElementById(`producto${n}`)
    divProducto.remove()

    acumulador = 0
    subTotal = 0
    total = 0
    IVA = 0

    acumulador = carrito.map(producto => producto = {imp: producto.precio, cant: producto.cantidad})
    
    acumulador.forEach(producto => {
        subTotal += producto.imp * producto.cant
    })

    total = (subTotal * 1.21).toFixed(2)
    IVA = (subTotal * 0.21).toFixed(2)

    // ACTUALIZAR DOM
    if(carrito.length == 0){
        botonCarrito.classList.add("d-none")
        divProductos.innerHTML = `
            <div class="carritoVacio col-12 d-flex align-items-center justify-content-center bg-light">
                <p class="text-center">TU CARRITO ESTA VACIO</p>
            </div>     
        `

        resCompra.innerHTML = `
            <p class="col-8 text-center fs-5">No te quedes fuera de nuestras promos, registrate y comenza a comprar</p>
        `
    } else {
        resCompra.innerHTML = `
            <p class="col-10 my-2">${carrito.length} PRODUCTO/S</p>
            <p class="col-2 my-2 text-end">$ ${subTotal}</p>
            <p class="col-10 my-2">ENTREGA</p>
            <p class="col-2 my-2 text-end">GRATIS</p>
            <p class="total col-6 my-0">TOTAL</p> 
            <p class="total col-6 text-end my-0">$ ${total}</p>
            <p class="col-12 m-0">(IVA incluido  $ ${IVA})</p>
        `
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))       
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

// FUNCIÓN LLENAR CARRITO
function llenarCarrito(){
    if(carrito.length == 0){
        botonCarrito.classList.add("d-none")
        divProductos.innerHTML += `
            <div class="carritoVacio col-12 d-flex align-items-center justify-content-center bg-light">
                <p class="text-center">TU CARRITO ESTA VACIO</p>
            </div>     
        `
        
        resCompra.innerHTML += `
            <p class="col-8 text-center fs-5">No te quedes fuera de nuestras promos, registrate y comenza a comprar</p>
        `
    } else {
        botonCarrito.classList.remove("d-none")
        infoTotal.innerText = `
            TOTAL (${carrito.length} producto/s) = $ ${total}
        `

        carrito.forEach(producto => {
            divProductos.innerHTML += `
                <div id="producto${producto.id}" class="productocarrito order-2 py-3 py-md-4 p-md-0 d-flex flex-row">
                    <div class="col-5 col-md-4">
                        <img class="img-fluid" src="${producto.img}" alt="${producto.nombre}">
                    </div>
    
                    <div class="d-flex flex-row flex-wrap p-2 justify-content-start align-content-around">
                        <div class="col-12 col-md-11 d-flex flex-row flex-nowrap align-items-start">
                            <h5 class="col-9 col-md-10">${producto.nombre}</h5>
                            <button class="button--close col-2" type="button" onClick="eliminarPageCarrito(${producto.id})">X</button>
                        </div>
                        <p class="col-12 m-0">Precio: $${producto.precio}</p>
                        <p class="col-12 m-0">Talle: ${producto.talle}</p>
                        <span>Cantidad: ${producto.cantidad}</span>
                    </div>
                </div>
            `
        }) 

        resCompra.innerHTML += `
            <p class="col-10 my-2">${carrito.length} PRODUCTO/S</p>
            <p class="col-2 my-2 text-end">$ ${subTotal}</p>
            <p class="col-10 my-2">ENTREGA</p>
            <p class="col-2 my-2 text-end">GRATIS</p>
            <p class="total col-6 my-0">TOTAL</p> 
            <p class="total col-6 text-end my-0">$ ${total}</p>
            <p class="col-12 m-0">(IVA incluido  $ ${IVA})</p>
        `
    }
}

// CARGAR PRODUCTOS EN EL DOM
mostrarProductos()

// PÁGINA CONTACTO
if(filename() == "contacto.html"){
    // EVENTO REGISTRO
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault()

        datForm = new FormData(e.target)

        users.some(user => user.email == datForm.get("email")) || usersData.some(user => user.email == datForm.get("email"))
            ? usuarioYaRegistrado()
            : registrarUsuario()    
    })

    // FUNCIÓN REGISTRAR USUARIO
    function registrarUsuario() {
        const user = new User(datForm.get("email"), datForm.get("password"), datForm.get("name"), datForm.get("surname"), datForm.get("birthday"), datForm.get("country"), datForm.get("gender"), true)
        users.push(user)

        usersData = users.map(user => user = {email: user.email, nombre: user.name, sesion: user.sesionActive})
        localStorage.setItem("usersData", JSON.stringify(usersData))

        registerForm.reset()

        modal.innerHTML = `
            <div class="modalContacto d-flex flex-column justify-content-around align-items-center mx-auto">
                <div class="modalContactoHeader">
                    <h2 class="text-center">Gracias por registrarte en <span>SportStyle</span></h2>
                </div>
                <div class="modalContactoBody col-12 text-center">
                    <h3><span>${user.name}</span> te hemos enviado a <span>${user.email}</span> un correo para la verificación de tu cuenta</h3>
                </div>
                <button class="botonModalContacto">Cerrar</button>
            </div>
        `
        
        const closeModal = document.querySelector(".botonModalContacto")

        modal.classList.add("divModal--show")

        closeModal.addEventListener("click", (e) => {
            e.preventDefault()
            modal.classList.remove("divModal--show")
            document.body.classList.remove("body--modal")
        })

        document.body.classList.add("body--modal")
        labelEmail.classList.add("d-none")
        registerEmail.classList.remove("emailDuplicado")
    }

    // FUNCIÓN USUARIO YA REGISTRADO
    function usuarioYaRegistrado() {
        labelEmail.classList.remove("d-none")
        registerEmail.classList.add("emailDuplicado")
        registerEmail.focus()
    }   

    // EVENTO TERMINOS Y CONDICIONES
    btnTerms.addEventListener("click", () => {
        (async () => {
            const {value: accept} = await Swal.fire({
                title: 'Terminos y condiciones',
                html: '<a href="https://policies.google.com/terms?hl=es" target="_blank"> Ver términos y condiciones </a>',
                input: 'checkbox',
                inputValue: 0,
                inputPlaceholder: 'Estoy de acuerdo con los términos y condiciones',
                confirmButtonText: 'Aceptar',
                inputValidator: (result) => {
                    return !result && 'Para continuar debes aceptar los términos y condiciones'
                }
            })       
        })
    })
    // EVENTO POLITICAS DE PRIVACIDAD
    btnPol.addEventListener("click", () => {
        (async () => {

            const { value: accept } = await Swal.fire({
                title: 'Politicas de privacidad',
                html: '<a href="https://policies.google.com/privacy?hl=es" target="_blank"> Ver politicas de privacidad </a>',
                input: 'checkbox',
                inputValue: 0,
                inputPlaceholder: 'Estoy de acuerdo con las politicas de privacidad',
                confirmButtonText: 'Aceptar',
                inputValidator: (result) => {
                    return !result && 'Para continuar debes aceptar las politicas de privacidad'
                }
            })       
        })
    })

    // EVENTO FORMULARIO CONTACTO
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault()

        let datForm = new FormData(e.target)
        const mensajeContacto = new Contacto(datForm.get("email"), datForm.get("name"), datForm.get("surname"), datForm.get("tel"), datForm.get("consulta"))
        contacto.push(mensajeContacto)

        contactForm.reset()

        modal.innerHTML = `
            <div class="modalContacto d-flex flex-column justify-content-around align-items-center mx-auto">
                <div class="modalContactoHeader">
                    <h2 class="text-center">Gracias por contactarte con <span>SportStyle</span></h2>
                </div>
                <div class="modalContactoBody col-12 text-center">
                    <h3><span>${mensajeContacto.name}</span> nos estaremos poniendo en contacto al correo <span>${mensajeContacto.email}</span> o vía telefónica al <span>${mensajeContacto.tel}</span> por tu mensaje.</h3>
                </div>
                <button class="botonModalContacto">Cerrar</button>
            </div>
        `

        const closeModal = document.querySelector(".botonModalContacto")

        modal.classList.add("divModal--show")

        closeModal.addEventListener("click", (e) => {
            e.preventDefault()
            modal.classList.remove("divModal--show")
            document.body.classList.remove("body--modal")
        })

        document.body.classList.add("body--modal")
    })
}

// PAGINA CARRITO
if(filename() == "carrito.html"){
    const acumulador = carrito.map(producto => producto = {imp: producto.precio, cant: producto.cantidad})
    subTotal = 0
    total = 0
    IVA = 0

    acumulador.forEach(producto => {
        subTotal += producto.imp * producto.cant
    })

    total = (subTotal * 1.21).toFixed(2)
    IVA = (subTotal * 0.21).toFixed(2)

    divProductos.innerHTML = ""
    llenarCarrito()

    //CARRITO - IR A PAGAR
    botonCarrito.addEventListener("click", () => {
        botonCarrito.classList.add("d-none")

        // FORMULARIO DIRECCIÓN DE ENVÍO
        bodyCarrito.innerHTML = ""
        bodyCarrito.innerHTML += `
            <div class="tucarrito d-flex flex-column p-3 col-xl-8">
                <h2 class="titulo-seccion text-xl-start ps-xl-5">DATOS DE ENTREGA</h2>
            </div>
    
            <form id="formEnvio" class="formCarrito d-flex flex-row flex-wrap align-content-center justify-content-evenly p-3 col-xl-10">
                <input id="formFocus" type="text" class="col-11 col-xl-5 mb-4" name="name" placeholder="Nombre/s *" required></input>
                <input type="text" class="col-11 col-xl-5 mb-4" name="surname" placeholder="Apellido/s *" required></input>
                <div class="col-12 mb-2 d-flex flex-column align-items-center">
                    <input type="text" class="col-11 col-xl-10" name="street" placeholder="Calle *" required></input>
                    <label for="street" class="col-11 col-xl-10 ps-3">P ej: Calle Balcarce</label>
                </div>
                <input type="number" class="col-11 col-xl-5 mb-4" name="number" placeholder="Número *" required></input>
                <input type="number" class="col-11 col-xl-5 mb-4" name="floor" placeholder="Piso"></input>
                <input type="text" class="col-11 col-xl-5 mb-4" name="departament" placeholder="Departamento"></input>
                <input type="number" class="col-11 col-xl-5 mb-4" name="cp" placeholder="Código postal *" required></input>
                <select class="col-11 col-xl-5 mb-4" name="province" required>
                    <option value="" disabled selected>Provincia</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Río Negro">Río Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucumán">Tucumán</option>
                </select>
                <input type="text" class="col-11 col-xl-5 mb-4" name="location" placeholder="Localidad *" required></input>
                <input type="text" class="col-11 col-xl-10 mb-4" name="tel" placeholder="Teléfono (8 a 15 dígitos) *" required></input>
    
                <button type="submit" class="text-decoration-none py-2 px-4 col-8 align-self-center">Continuar con el pago</button>
            </form>
        `
    
        document.getElementById("formFocus").focus()
        const formEnvio = document.getElementById("formEnvio")

        formEnvio.addEventListener("submit", (e) => {
            e.preventDefault()
            let datForm = new FormData(e.target)
            const dirEnvio = new Direccion(datForm.get("name"), datForm.get("surname"), datForm.get("street"), datForm.get("number"), datForm.get("floor"), datForm.get("departament"), datForm.get("cp"), datForm.get("province"), datForm.get("location"), datForm.get("tel"))
            formEnvio.reset()

            let enUna = total
            let enTres = (total/3).toFixed(2)
            let enSeis = (total/6).toFixed(2)
            let enDoce = (total/12).toFixed(2)

            bodyCarrito.innerHTML = ""
            bodyCarrito.innerHTML = `
            <div class="tucarrito d-flex flex-column p-3 col-xl-8">
                <h2 class="titulo-seccion text-xl-start ps-xl-5">METODO DE PAGO</h2>
            </div>
        
            <form id="formPago" class="formCarrito d-flex flex-row flex-wrap align-content-center justify-content-evenly p-3 col-xl-10">
                <select id="formFocus" class="col-11 mb-4" name="cuotas">
                    <option value="1">1 x $${enUna}</option>
                    <option value="3">3 x $${enTres}</option>
                    <option value="6">6 x $${enSeis}</option>
                    <option value="12">12 x $${enDoce}</option>
                </select>
                <div class="col-12 mb-2 d-flex flex-column align-items-center">
                    <input type="number" class="col-11" name="numero" placeholder="XXXX XXXX XXXX XXXX *" required></input>
                    <label for="numero" class="col-11 col-xl-10 ps-3">Número de tarjeta</label>
                </div>
                <input type="text" class="col-11 mb-4" name="nombre" placeholder="Nombre del titular (Como figura en la tarjeta) *" required></input>
                <div class="col-5 col-xl-3 mb-2 d-flex flex-column align-items-center">
                    <input type="number" class="col-11" name="mesVencimiento" placeholder="XX *" max="12" required>
                    <label for="mesVencimiento" class="col-11 col-xl-10 ps-3 text-center">Mes de vencimiento *</label>
                </div>
                <div class="col-5 col-xl-3 mb-2 d-flex flex-column align-items-center">
                    <input type="number" class="col-11" name="añoVencimiento" placeholder="XX *" max="99" required>
                    <label for="añoVencimiento" class="col-11 col-xl-10 ps-3 text-center">Año de vencimiento *</label>
                </div>
                <div class="col-5 col-xl-3 mb-2 d-flex flex-column align-items-center">
                    <input type="number" class="col-11" name="cvc" placeholder="XXX *" max="999" required></input>
                    <label for="cvc" class="col-11 col-xl-10 ps-3 text-center">CVC *</label>
                </div>
                
                <button type="submit" class="text-decoration-none py-2 px-4 col-8 align-self-center">Finalizar compra</button>
            </form>
            `
            const datosEnvioCarrito = document.getElementById("formPago")

            datosEnvioCarrito.addEventListener("submit", (e) => {
                e.preventDefault()
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                      confirmButton: 'btn btn-success',
                      cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                })
                  
                swalWithBootstrapButtons.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire(
                            'Cancelled',
                            'Your imaginary file is safe :)',
                            'error'
                        )
                    }
                })

                Swal.fire(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                )
            })
        })
    })
}

