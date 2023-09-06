//arrow function
const pesquisaCEP = async () => {
    const cep = document.getElementById('cep').value;

    //passando o cep para API viacep
    //usando template script ``
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    
    if (endereco.erro) {--
        alert(`CEP ${cep} inválido`);
        document.getElementById('cep').value ="";
        document.getElementById('cep').focus();
    } else {
        preencherFormulario(endereco);
    }
};

//Funcao para preencher o formulário

const preencherFormulario = (endereco) => {

    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;


}
/* Criando um evento do input CEP */
document.getElementById('cep')
    .addEventListener('focusout', pesquisaCEP);