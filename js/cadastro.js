let email = document.getElementById('email');
let senha = document.getElementById('senha');


//Criando eventos dos botões
document.getElementById('botaoLogin')
    .addEventListener('click', (e) => {
        e.preventDefault();
        window.open("../login.html");
        window.close();

    }
    );
document.getElementById('botaoCad')
    .addEventListener('click', (e) => {
        e.preventDefault();

        if (email.value !== '' || senha.value !== '') {
            cadastro()
        } else {
            alert("Preencha o email e a senha");
            email.focus();
        }
    }
    );

//Criando CRUD no Storage

//Create - Cadastrar
function cadastro() {
 
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    let usuarios = new Array();

    //Verificando se existe USUARIOS no Storage
    if (localStorage.hasOwnProperty('usuarios')) {
        //Recuperar os valores da chave Usuarios
        //Conveertendo a chave USUARIOS em objeto
        usuarios = JSON.parse(localStorage.getItem('usuarios'));

    }

    //adicionar um novo usuário no Storage

    email = email.value;
    senha = senha.value;

    usuarios.push({ email, senha });

    //Convertendo para String
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("usuário cadastrado com sucesso!");
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('email').focus();
}
