
/* Definindo os tamanhos dos inputs */
function verificar(){

   let nome = document.getElementById('nome').value;
   
    if( nome == ""){
        alert("obrigatório o preenchimento do nome");
        document.getElementById('nome').focus();
    }

}