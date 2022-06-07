
/************************ DECLARAÇÃO DE VARIÁVEIS ********************/

let novaPalavraSecreta = document.getElementById("nova-palavra-secreta");
const novaCategoria = document.getElementById("categoria");
const btnEnviar = document.getElementById("cadastrar");
const btnVoltar = document.getElementById("voltar")
var palavraRepetida = 0;


/************************ VALIDAÇÃO DO CAMPO INPUT PALAVRA SECRETA ********************/


 novaPalavraSecreta.addEventListener('keypress', function(e){

    if (!checkChar(e)) {
        e.preventDefault();
    }
}); 

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);
    const pattern = '[A-Z]';

    if (char.match(pattern)) {
        console.log(char);
        return true;
    }
}

/************************ VERIFICAÇÃO SE A PALAVRA JÁ EXISTE NO ARRAY ********************/


function verificaPalavra(palavraInformada, array) {

    if (palavraInformada.value.length == 0) {

        alert("Informe a palavra a ser cadastrada!")
    } else if (verificaCategoria(categoria)) {


        for (var i = 0; i < array.length; i++) {

            palavraInformada.value == array[i].nome ? palavraRepetida += 1 : palavraRepetida += 0

        }

        if (palavraRepetida > 0) {

            alert('Erro!!! Essa palavra já consta no banco de dados.\n' + 'Digite outra palavra.')
            document.getElementById('nova-palavra-secreta').value = ""
            palavraRepetida = 0

        } else if (palavraRepetida == 0) {

           
             palavras.push({nome:palavraInformada.value, categoria:novaCategoria.value})
             console.log(palavras)
            alert('Palavra cadastrada com sucesso!')

            localStorage.setItem("palavraInserida", JSON.stringify(palavras))
            document.getElementById('nova-palavra-secreta').value = "";
            document.getElementById("categoria").value = "";
           
               
        }

    }

}

/************************ VALIDAÇÃO DO INPUT CATEGORIA ********************/


function verificaCategoria (categoria){

if(categoria.value.length ==0){

    alert("Preencha o campo Categoria")
}else{
   
    return true
}

}

/************************ ENVENTO QUE ENVIA A PALAVRA AO ARRAY ********************/


btnEnviar.addEventListener("click", function () {

    

    verificaPalavra(novaPalavraSecreta, palavras)
   

})



