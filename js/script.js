// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const divProductos = document.getElementById("contProductos")

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

// ARRAYS 
const users = []
let usersData = []
const contacto = []
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

    prodParseados.forEach((producto) => {
        if(document.getElementById(`producto${producto.id}`)){    
            botonAgregarCarrito(producto)
            completarTalles(producto)
        }
    })
}

// FUNCIÓN LLENAR TALLES
function completarTalles(producto){
    const selectProductos = document.getElementById(`talleProducto${producto.id}`)
    const labelTalle = document.getElementById(`labelTalle${producto.id}`)

    const talleRopa = ["XS", "S", "M", "L", "XL", "XXL"]
    const talleCalzadoMujer = [35, 36, 37, 38, 39, 40, 41]
    const talleCalzadoHombre = [38, 39, 40, 41, 42, 43, 44, 45, 46]
    const talleCalzadoNinos = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ,31, 32, 33, 34, 35, 36, 37, 38]

    selectProductos.innerHTML = `
        <option value="" disabled selected>Seleccione un talle</option>
    `

    if(producto.categoria !== "Accesorio"){
        if(producto.categoria !== "Calzado" && producto.categoria !== null){
            talleRopa.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        } else if(producto.categoria == "Calzado" && producto.categoria !== null && producto.usuario == "Mujer"){
            talleCalzadoMujer.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        } else if(producto.categoria == "Calzado" && producto.categoria !== null && producto.usuario == "Hombre"){
            talleCalzadoHombre.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        } else if(producto.categoria == "Calzado" && producto.categoria !== null && producto.usuario == "Niños"){
            talleCalzadoNinos.forEach(talle => {
                selectProductos.innerHTML += `
                    <option value="${talle}">${talle}</option>
                `
            })
        }
    } else {
        selectProductos.classList.add("d-none")
        labelTalle.classList.add("d-none")
    }
}

//FUNCIÓN AÑADIR AL CARRITO
function botonAgregarCarrito(producto){ 
    document.getElementById(`producto${producto.id}`).lastElementChild.addEventListener('click', () => {

        const selectProductos = document.getElementById(`talleProducto${producto.id}`)

        if(selectProductos.value !== "" || selectProductos.classList.contains("d-none")){
            let prodId = producto.id
            producto.talle = selectProductos.value

            if(carrito.some(producto => producto.id == prodId)){
                carrito[producto.cantidad++]
            } else {
                carrito.push(producto)
                producto.cantidad++
            }

            if(carrito !== []){
                localStorage.setItem("carrito", JSON.stringify(carrito))                        
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

            if(filename() == "index.html"){
                const secOfertas = document.getElementById("secOfertas")
                secOfertas.classList.remove("sticky-top")
            }
        } else {
            selectProductos.classList.add("talleIncorrecto")
            setTimeout(() => {
                selectProductos.classList.remove("talleIncorrecto")
            }, 3000);
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

// SCRIPT PÁGINA CONTACTO
const registerForm = document.getElementById("registerForm")
const contactForm = document.getElementById("contactForm")
const modal = document.querySelector(".divModal")
const registerEmail = document.getElementById("registerEmail")
const labelEmail = document.getElementById("labelEmail")
const btnTerms = document.getElementById("btnTerms")
const btnPol = document.getElementById("btnPol")

if(filename() == "contacto.html"){
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

    // EVENTO FORMULARIO REGISTRO
    let datForm

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault()

        datForm = new FormData(e.target)

        users.some(user => user.email == datForm.get("email")) || usersData.some(user => user.email == datForm.get("email"))
            ? usuarioYaRegistrado()
            : registrarUsuario()    
    })

    // FORMULARIO REGISTRO - TERMINOS Y CONDICIONES
    btnTerms.addEventListener("click", () => {
        (async () => {

            const {value: accept} = await Swal.fire({
                title: 'Terminos y condiciones',
                html: '<a href="https://policies.google.com/terms?hl=es" target="_blank"> Ver términos y condiciones </a>',
                input: 'checkbox',
                inputValue: 0,
                inputPlaceholder:
                    'Estoy de acuerdo con los términos y condiciones',
                confirmButtonText:
                    'Aceptar',
                inputValidator: (result) => {
                    return !result && 'Para continuar debes aceptar los términos y condiciones'
                }
            })       
        })
    })

    btnPol.addEventListener("click", () => {
        (async () => {

            const { value: accept } = await Swal.fire({
            title: 'Politicas de privacidad',
            html: '<a href="https://policies.google.com/privacy?hl=es" target="_blank"> Ver politicas de privacidad </a>',
            input: 'checkbox',
            inputValue: 0,
            inputPlaceholder: 'Estoy de acuerdo con los términos y condiciones',
            confirmButtonText: 'Aceptar',
            inputValidator: (result) => {
                return !result && 'Para continuar debes aceptar los términos y condiciones'
            }
            })       
            })()
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
    const infoTotal = document.getElementById("infoTotal")

    mostrarProductos().then( producto => {
        const productos = producto

            
    })
    
    infoTotal.innerText = `
        TOTAL (${carrito.length} producto/s) = $${carrito}
    `
}
