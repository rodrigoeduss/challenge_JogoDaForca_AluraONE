
/**************************************** DECLARAÇÃO DE VARIÁVEIS ********************************************/

let tentativas = 6;
let lista = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let btnReiniciar = document.getElementById("btnReiniciar");

/***************************************** ARRAY DE PALAVRAS *************************************************/

let palavras = [
    {
        nome: "GUITARRA",
        categoria: "INSTRUMENTO MUSICAL"
    },
    {
        nome: "CONTRABAIXO",
        categoria: "INSTRUMENTO MUSICAL"
    },
    {
        nome: "VIOLINO",
        categoria: "INSTRUMENTO MUSICAL"
    },
    {
        nome: "SAXOFONE",
        categoria: "INSTRUMENTO MUSICAL"
    },
    {
        nome: "CLARINETE",
        categoria: "INSTRUMENTO MUSICAL"
    },
    {
        nome: "FOOFIGHTERS",
        categoria: "BANDA DE ROCK"
    },
    {
        nome: "PEARLJAM",
        categoria: "BANDA DE ROCK"
    },
    {
        nome: "GUNSNROSES",
        categoria: "BANDA DE ROCK"
    },
    {
        nome: "NIRVANA",
        categoria: "BANDA DE ROCK"
    },
    {
        nome: "CAPITALINICIAL",
        categoria: "BANDA DE ROCK"
    },
    {
        nome: "CIDADENEGRA",
        categoria: "BANDA DE REGGAE"
    },
    {
        nome: "ALPHABLONDY",
        categoria: "BANDA DE REGGAE"
    },
    {
        nome: "NATIRUTS",
        categoria: "BANDA DE REGGAE"
    },
    {
        nome: "TRIBODEJAH",
        categoria: "BANDA DE REGGAE"
    },
    {
        nome: "MASKAVO",
        categoria: "BANDA DE REGGAE"
    },
    {
        nome: "INGLATERRA",
        categoria: "PAÍS"
    },
    {
        nome: "ARGENTINA",
        categoria: "PAÍS"
    },
    {
        nome: "ALEMANHA",
        categoria: "PAÍS"
    },
    {
        nome: "COLOMBIA",
        categoria: "PAIS"
    },
    {
        nome: "VENEZUELA",
        categoria: "PAÍS"
    }

];

/**************************************** ARMAZENAMENTO LOCALSTORAGE ******************************************/

if (localStorage.palavraInserida) {

    let novoArray = localStorage.getItem("palavraInserida");

    palavras = JSON.parse(novoArray)

}

/*************************************** FUNÇÃO QUE SORTEIA PALAVRAS *****************************************/

sorteiaPalavra();
function sorteiaPalavra() {

    const index = parseInt(Math.random() * palavras.length);
    palavraSecretaSorteada = palavras[index].nome;
    palavraSecretaCategoria = palavras[index].categoria;


};

/**************************************** FUNÇÃO QUE MOSTRA PALAVRA NA TELA **********************************/

mostraPalavraNaTela();
function mostraPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria.toUpperCase();

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (lista[i] == undefined) {
            lista[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + lista[i] + "</div>";
        } else {

            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + lista[i] + "</div>";
        }
    }
};

/*************************************** FUNÇÃO QUE PEGA A LETRA DIGITADA *************************************/

function letraDigitada(letra) {

    var show = document.getElementById("tecla-" + letra);
    show.disabled = true;


    if (tentativas > 0) {

         mudarStyleLetra("tecla-" + letra);
        
        comparaLista(letra);
        mostraPalavraNaTela();
    }

}

/************************************* FUNÇÃO QUE MUDA O ESTILO DA LETRA ******************************/


  function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "ffffff";
}  

/************************ FUNÇÃO QUE COMPARA O QUE FOI DIGITADO À PALAVRA SECRETA **********************/

function comparaLista(letra) {
    const position = palavraSecretaSorteada.indexOf(letra);
    if (position < 0) {
        tentativas--;
        carregaImagemForca();

        if (tentativas == 0) {

            abreModal("Que pena... Você perdeu!!! ", "A palavra secreta era: " + palavraSecretaSorteada);
        }


    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {

            if (palavraSecretaSorteada[i] == letra) {

                lista[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != lista[i]) {
            vitoria = false;
        }
    }
    if (vitoria == true) {

        abreModal("Parabéns!!! Você venceu!!!", "A palavra secreta é: " + palavraSecretaSorteada);

        tentativas = 0;

    }

}

/************************ FUNÇÃO QUE CARREGA A IMAGEM DA FORCA ***********************/



function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("image").style.background = "url('./img/image01.png')";
            break;

        case 4:
            document.getElementById("image").style.background = "url('./img/image02.png')";
            break;

        case 3:
            document.getElementById("image").style.background = "url('./img/image03.png')";
            break;

        case 2:
            document.getElementById("image").style.background = "url('./img/image04.png')";
            break;

        case 1:
            document.getElementById("image").style.background = "url('./img/image05.png')";
            break;

        case 0:
            document.getElementById("image").style.background = "url('./img/image06.png')";
            break;

        default:
            document.getElementById("image").style.background = "url('./img/image.png')";
            break;
    }
}

/************************ FUNÇÃO QUE CARREGA A MODAL DO FIM DO JOGO ***********************/


function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;


    $("#myModal").modal({
        show: true
    });
}

/************************ EVENTO QUE REINICIA O JOGO ************************************/


btnReiniciar.addEventListener("click", function () {

    location.reload();

});







