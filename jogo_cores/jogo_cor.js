var corVermelho = 125;
var corVerde = 125;
var corAzul = 125;

var r = 0;
var g = 0;
var b = 0;

window.onload = function () {
    configurarSliders();
    setarCorQuestao();
};

const lataResultado = $(".lata_cor_resultado");
const textoResultado = lataResultado.parent().find(".texto");
function atualizarCorResultado() {
    lataResultado.css("background-color", `rgb(${corVermelho}, ${corVerde}, ${corAzul})`);
    textoResultado.find(".text-danger").text(corVermelho);
    textoResultado.find(".text-success").text(corVerde);
    textoResultado.find(".text-primary").text(corAzul);

    if (corVermelho == r && corVerde == g && corAzul == b) {
        newPopup();
    }
}

function setarCorQuestao() {
    r = Math.floor(Math.floor(Math.random() * 255) / 5) * 5;
    g = Math.floor(Math.floor(Math.random() * 255) / 5) * 5;
    b = Math.floor(Math.floor(Math.random() * 255) / 5) * 5;
    let objetivo = $(".lata_cor_questao");
    objetivo.css("background-color", `rgb(${r}, ${g}, ${b})`);
}

function newPopup() {
    varWindow = window.open('venceu.html', 'venceu')
}

function configurarSliders() {
    const sliderVermelho = $("#slider_vermelho");
    const lataVermelha = $(".lata_cor.vermelho");
    const textoVermelho = lataVermelha.parent().find(".valor");
    sliderVermelho.on("input", function () {
        corVermelho = $(this).val();
        lataVermelha.css("background-color", `rgb(${corVermelho}, 0, 0)`);
        console.log(textoVermelho);
        textoVermelho.text(corVermelho);
        atualizarCorResultado();
    });

    const sliderVerde = $("#slider_verde");
    const lataVerde = $(".lata_cor.verde");
    const textoVerde = lataVerde.parent().find(".valor");
    sliderVerde.on("input", function () {
        corVerde = $(this).val();
        lataVerde.css("background-color", `rgb(0, ${corVerde}, 0)`);
        textoVerde.text(corVerde);
        atualizarCorResultado();
    });

    const sliderAzul = $("#slider_azul");
    const lataAzul = $(".lata_cor.azul");
    const textoAzul = lataAzul.parent().find(".valor");
    sliderAzul.on("input", function () {
        corAzul = $(this).val();
        lataAzul.css("background-color", `rgb(0, 0, ${corAzul})`);
        textoAzul.text(corAzul);
        atualizarCorResultado();
    });
}