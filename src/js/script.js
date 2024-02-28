
//mudar fundo

$(document).ready(function () {
    $('.btn.vingadores').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/vingadores_escuro.png")');
    });})

$(document).ready(function () {
    $('.btn.starwars').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/starwars_fundo.jpg")');
    });
});

$(document).ready(function () {
    $('.btn.interstellar').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_interestelar.jpg")');
    });
});

$(document).ready(function () {
    $('.btn.matrix').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_matrix.jpg")');
    });
});

$(document).ready(function () {
    $('.btn.DevoltaParaOFuturo').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_devolta.jpg")');
    });
});

$(document).ready(function () {
    $('.btn.harrypotter').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_harry.jpg")');
    });
});

//fundo animação

$(document).ready(function () {
    $('.btn.coraline').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_coraline.jpg")');
    });
});

$(document).ready(function () {
    $('.btn.aranha').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_aranha.webp")');
    });
});

$(document).ready(function () {
    $('.btn.enrolados').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_enrolados.webp")');
    });
});

$(document).ready(function () {
    $('.btn.era').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_era.webp")');
    });
});

$(document).ready(function () {
    $('.btn.shrek').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_shrek.jpeg")');
    });
});

$(document).ready(function () {
    $('.btn.toy').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_toy.webp")');
    });
});

//fundo anime
$(document).ready(function () {
    $('.btn.jujutsu').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_jujutsu.jpg")');
    });
});

$(document).ready(function () {
    $('.btn.kakegurui').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_kakegurui.jpg")');
    });
});

$(document).ready(function () {
    $('.btn.thePromised').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_the (2).jpg")');
    });
});

$(document).ready(function () {
    $('.btn.death').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_death.webp")');
    });
});

$(document).ready(function () {
    $('.btn.attack').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_attack.webp")');
    });
});

$(document).ready(function () {
    $('.btn.lookism').on('click', function () {
        $('body').css('background-image', 'url("./src/imagens/fundo_lookism.jpg")');
    });
});

//donwload
document.addEventListener('DOMContentLoaded', function () {
    const botoesDownload = document.querySelectorAll('.botao_download');

    botoesDownload.forEach(botao => {
        botao.addEventListener('click', function () {

            botoesDownload.forEach(btn => btn.classList.remove('selecionado'));

            botao.classList.add('selecionado');
        });
    });
});

//cadastro
// document.getElementById('.imagem-clicavel').addEventListener('click', function () {
//     alert('Plano Básico selecionado!');
// });

// document.getElementById('.imagem-clicavel2').addEventListener('click', function () {
//     // Ação que será executada ao clicar na imagem
//     alert('Plano Premium selecionado!');
//     // Ou você pode redirecionar para outra página, executar outra lógica, etc.
// });

//mudar catalogo
const filmes = document.querySelectorAll(".btn");
const container = document.querySelectorAll(".tipo_de_filme");


filmes.forEach((btn, indice) => {
    btn.addEventListener("click", () => {
        desselecionarbtn();
        desselecionartipo_de_filme();

        btn.classList.add("selecionado");

        container[indice].classList.add("selecionado");
    });
});

function desselecionartipo_de_filme() {
    const personagemSelecionado = document.querySelector(".tipo_de_filme.selecionado");
    personagemSelecionado.classList.remove
        ("selecionado");
}

function desselecionarbtn() {
    const botaoSelecionado = document.querySelector(".btn.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}