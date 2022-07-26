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
})
