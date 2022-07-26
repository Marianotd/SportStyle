const registerSection = document.getElementById("registerSection")
const registerForm = document.getElementById("registerForm")

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

const users = []
let usersData = []

if(localStorage.getItem("usersData")){
    usersData = JSON.parse(localStorage.getItem("usersData"))
} else {
    localStorage.setItem("usersData", JSON.stringify(usersData))
}

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let datForm = new FormData(e.target)

    const user = new User(datForm.get("email"), datForm.get("password"), datForm.get("name"), datForm.get("surname"), datForm.get("birthday"), datForm.get("country"), datForm.get("gender"), true)
    users.push(user)

    usersData = users.map(user => user = {email: user.email, nombre: user.name, sesion: user.sesionActive})
    localStorage.setItem("usersData", JSON.stringify(usersData))

    registerForm.reset()

    console.log(users)

    registerSection.innerHTML = `
        <div class="col-10 col-md-8 col-xl-9 m-auto d-flex flex-column justify-content-around my-5">
            <h2 class="titulo-seccion text-center my-5 pb-3">¡Gracias por registrarte en SportStyle!</h2>
            <h3 class="text-center mb-xl-4">${user.name} se ha enviado un correo a tu casilla: ${user.email}</h3>
            <p class="text-center">Una vez realices la confirmación podrás acceder con tu email y contraseña para disfrutar de todos nuestros beneficios</p>
        </div>

    `   
})
