import { getUser, newUser } from "../API/API.js"


const formularioRegistro = document.querySelector('#registro')
formularioRegistro.addEventListener('submit',userNew)

const login = document.querySelector('#loginUser')
login.addEventListener('submit',LoginUser)



function userNew(e){
    e.preventDefault()
    const nombre = document.querySelector('#NombreRegistro').value
    const user = document.querySelector('#UserRegister').value
    const password = document.querySelector('#PasswordRegister').value
    const email = document.querySelector('#Email').value

    const Usuari ={
        nombre,
        user,
        password,
        email,
    }
  
    if(validate(Usuari)){
        alert('Todos los campos son obligatorios')
        return
    }

    newUser(Usuari)
}

function validate(obj){
    return !Object.values(obj).every(element => element !== "")
}

function LoginUser(e) {
    e.preventDefault()
    const userLogin = document.querySelector('#UserLogin').value
    const passwordLogin = document.querySelector('#PasswordLogin').value
    const log ={
        userLogin,
        passwordLogin,
    }
    
    validar(userLogin,passwordLogin)
}


async function validar(userLogin,passwordLogin){
    const usuarios = await getUser()
    
    usuarios.forEach((usuario) => {
        const {user,password} = usuario
        let confirmacion = false
        if (userLogin === user && passwordLogin === password) {
           window.location.href = "inicio.html"
           confirmacion = true
        }
    });
}