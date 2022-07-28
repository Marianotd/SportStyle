// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const registerForm = document.getElementById("registerForm")
const contactForm = document.getElementById("contactForm")
const modal = document.querySelector(".modalForm")

// CLASE USUARIO
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

// CLASE CONTACTO
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

// REVISAR LOCAL STORAGE
usersData = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : localStorage.setItem("usersData", JSON.stringify(usersData))                        

// EVENTO FORMULARIO REGISTRO
registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let datForm = new FormData(e.target)
    const user = new User(datForm.get("email"), datForm.get("password"), datForm.get("name"), datForm.get("surname"), datForm.get("birthday"), datForm.get("country"), datForm.get("gender"), true)
    users.push(user)

    usersData = users.map(user => user = {email: user.email, nombre: user.name, sesion: user.sesionActive})
    localStorage.setItem("usersData", JSON.stringify(usersData))

    registerForm.reset()

    modal.innerHTML += `
        <div class="modalContenedor d-flex flex-column justify-content-around align-items-center mx-auto">
            <div class="modalHeader">
                <h2 class="text-center">Gracias por registrarte en <span>SportStyle</span></h2>
            </div>
            <div class="modalBody col-12 text-center">
                <h3><span>${user.name}</span> te hemos enviado a <span>${user.email}</span> un correo para la verificación de tu cuenta</h3>
            </div>
            <button class="botonModal">Cerrar</button>
        </div>
    `
    
    const closeModal = document.querySelector(".botonModal")

    modal.classList.add("modalForm--show")

    closeModal.addEventListener("click", (e) => {
        e.preventDefault()
        modal.classList.remove("modalForm--show")
        document.body.classList.remove("body--modal")
    })

    document.body.classList.add("body--modal")
})

// EVENTO FORMULARIO CONTACTO
contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let datForm = new FormData(e.target)
    const mensajeContacto = new Contacto(datForm.get("email"), datForm.get("name"), datForm.get("surname"), datForm.get("tel"), datForm.get("consulta"))
    contacto.push(mensajeContacto)

    contactForm.reset()

    modal.innerHTML += `
        <div class="modalContenedor d-flex flex-column justify-content-around align-items-center mx-auto">
            <div class="modalHeader">
                <h2 class="text-center">Gracias por contactarte con <span>SportStyle</span></h2>
            </div>
            <div class="modalBody col-12 text-center">
                <h3><span>${mensajeContacto.name}</span> nos estaremos poniendo en contacto al correo <span>${mensajeContacto.email}</span> o vía telefónica al <span>${mensajeContacto.tel}</span> por tu mensaje.</h3>
            </div>
            <button class="botonModal">Cerrar</button>
        </div>
    `
    
    const closeModal = document.querySelector(".botonModal")

    modal.classList.add("modalForm--show")

    closeModal.addEventListener("click", (e) => {
        e.preventDefault()
        modal.classList.remove("modalForm--show")
        document.body.classList.remove("body--modal")
    })

    document.body.classList.add("body--modal")
})







