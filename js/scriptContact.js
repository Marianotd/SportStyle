// REGISTRAR EN VARIABLES ELEMENTOS DEL DOM
const registerForm = document.getElementById("registerForm")
const contactForm = document.getElementById("contactForm")
const modal = document.querySelector(".divModal")

// REVISAR LOCAL STORAGE
usersData = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : localStorage.setItem("usersData", JSON.stringify(usersData))                        

// FUNCIÓN REGISTRAR USUARIO
function registrarUsuario() {
    const user = new User(datForm.get("email"), datForm.get("password"), datForm.get("name"), datForm.get("surname"), datForm.get("birthday"), datForm.get("country"), datForm.get("gender"), true)
    users.push(user)

    usersData = users.map(user => user = {email: user.email, nombre: user.name, sesion: user.sesionActive})
    localStorage.setItem("usersData", JSON.stringify(usersData))

    registerForm.reset()

    modal.innerHTML = `
        <div class="modalContacto d-flex flex-column justify-content-around align-items-center mx-auto">
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
const registerEmail = document.getElementById("registerEmail")
const labelEmail = document.getElementById("labelEmail")

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
const btnTerms = document.getElementById("btnTerms")
const btnPol = document.getElementById("btnPol")

btnTerms.addEventListener("click", () => {
    (async () => {

        const { value: accept } = await Swal.fire({
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
        })()
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

    modal.classList.add("divModal--show")

    closeModal.addEventListener("click", (e) => {
        e.preventDefault()
        modal.classList.remove("divModal--show")
        document.body.classList.remove("body--modal")
    })

    document.body.classList.add("body--modal")
})





