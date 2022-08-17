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

// ARRAYS PRODUCTOS
const carrito = []

// ARRAYS USUARIOS
const users = []
let usersData = []
const contacto = []