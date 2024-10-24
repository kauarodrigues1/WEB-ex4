//criando a função validar

function validar(){

    //declarando as variaveis
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    //realizando o if e else para validar os campos

    if(usuario =="Admin" && senha =="123456"){
        alert(`seja bem vindo ao Sistema ${usuario}`)
        window.open('dashboard.html')
    }
    else{
        alert("usuario/senha inválidos")
    }
}





function inserir(){
    let numero = document.getElementById("posicao").value -1;
    let novo = document.getElementById("novo").value;
    document.getElementsByClassName("time")[numero].innerHTML =novo;
}

