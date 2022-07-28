// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const registerForm = document.getElementById("registerForm")
const abrirModalRegistro = document.getElementById("abrirModalRegistro")
const openModal = document.querySelector(".form__btn")
const modal = document.querySelector(".modalRegistro")

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

// ARRAYS
const users = []
let usersData = []

// REVISAR LOCAL STORAGE
if(localStorage.getItem("usersData")){
    usersData = JSON.parse(localStorage.getItem("usersData"))
} else {
    localStorage.setItem("usersData", JSON.stringify(usersData))
}

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
                <h3>${user.name} te hemos enviado a ${user.email} un correo para la verificación de tu cuenta</h3>
            </div>
            <button class="botonModal">Cerrar</button>
        </div>
    
    `
    
    const closeModal = document.querySelector(".botonModal")
    modal.classList.add("modalRegistro--show")

    closeModal.addEventListener("click", (e) => {
        e.preventDefault()
        modal.classList.remove("modalRegistro--show")
        document.body.classList.remove("body--modal")
    })

    document.body.classList.add("body--modal")
})







