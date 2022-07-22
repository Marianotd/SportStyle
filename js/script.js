const registerSection = document.getElementById("registerSection")
const registerForm = document.getElementById("registerForm")

class User {
    constructor(email, password, name, surname, birthday, country, gender){
        this.email = email
        this.password = password
        this.name = name
        this.surname = surname
        this.birthday = birthday
        this.country = country
        this.gender = gender
    }
}

const users = []

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let email = document.getElementById("registerEmail").value
    let password = document.getElementById("registerPassword").value
    let name = document.getElementById("registerName").value
    let surname = document.getElementById("registerSurname").value
    let birthday = document.getElementById("registerBirthday").value
    let country = document.getElementById("registerCountry").value
    let gender = document.querySelector('input[name="gender"]:checked').value

    const user = new User(email, password, name, surname, birthday, country, gender)
    users.push(user)
    console.log(users)

    registerSection.innerHTML = `
        <div id="registerSuccessful" class="col-8 col-md-9 col-xl-10 m-auto d-flex flex-column justify-content-around my-5">
            <h2 class="titulo-seccion text-center my-5 pb-3">¡Gracias por registrarte en SportStyle!</h2>
            <h3 class="text-center mb-xl-4">${user.name} se ha enviado un correo a tu casilla: ${user.email}.</h3>
            <p class="text-center">Una vez realices la confirmación podrás acceder con tu email y contraseña para disfrutar de todos nuestros beneficios</p>
        </div>
    
    `
})
