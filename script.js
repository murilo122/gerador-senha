let slider = document.getElementById('slider')
let button = document.getElementById('button')

let valor = document.getElementById('valor')
let password = document.getElementById('password')

let containerpassword = document.getElementById('container-password')


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@~[]?;.:,<>"
let novaSenha = ""

valor.innerHTML = slider.value
slider.oninput = function (){
    valor.innerHTML = this.value
}

function gerar (){
    let pass = ""
    for(let i = 0, n = charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerpassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass

}

function copyPassword(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}

