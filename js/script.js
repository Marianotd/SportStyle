// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const registerForm = document.getElementById("registerForm")
const abrirModalRegistro = document.getElementById("abrirModalRegistro")
const modalRegistro = document.querySelector(".modalRegistro")
const cerrarModalRegistro = document.querySelector(".cerrarModalRegistro")


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

    modalRegistro.innerHTML = `
        <div class="modalContenedor">
            <h2 class="modalTitulo">HOLA</h2>
            <div>
                <p class="modalTexto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure dolor veniam expedita fugit earum sed, voluptatum repellendus ab numquam beatae quibusdam consequuntur ut aperiam a quo totam eligendi deleniti? Corporis, ipsa vero odit, officia ullam delectus, fugiat quam eligendi accusantium quos assumenda tenetur tempora eveniet est necessitatibus dolorum similique aspernatur vel nisi distinctio possimus voluptatem autem. Nisi, debitis accusantium placeat cupiditate aut perferendis perspiciatis natus soluta similique itaque explicabo ullam quod totam. Sequi voluptas, voluptatibus dolorum odit itaque consectetur illum architecto incidunt cum iste placeat ducimus enim libero exercitationem dicta. Impedit corporis velit iste voluptates soluta fugiat possimus mollitia?</p>
            </div>
            <button class="cerrarModalRegistro" type="button">Cerrar Modal</button>
        </div>

    `   

    modalRegistro.classList.add("modalRegistro--show")

    cerrarModalRegistro.addEventListener("click", ( e) => {
        e.preventDefault()
        modalRegistro.classList.remove("modalRegistro--show")
    })
})




