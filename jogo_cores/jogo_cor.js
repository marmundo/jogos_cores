var cor_vermelho=125;
var cor_verde=125;
var cor_azul=125;

var r=0;
var g=0;
var b=0;

window.onload = function() {
    setarCorQuestao();
  };

var sliderVermelho=document.querySelector("#slider_vermelho")

sliderVermelho.addEventListener('input', function() {
    var vermelho=document.querySelector(".vermelho")
    cor_vermelho=this.value;
    vermelho.style.backgroundColor='rgb('+ this.value+ ',0,0)';
    setCorResultado();
  });

  var sliderVerde=document.querySelector("#slider_verde")

sliderVerde.addEventListener('input', function() {
    var verde=document.querySelector(".verde")
    cor_verde=this.value;
    verde.style.backgroundColor='rgb(0,'+ this.value+ ',0)';
    setCorResultado();
  });

var sliderAzul=document.querySelector("#slider_azul")

sliderAzul.addEventListener('input', function() {
    var azul=document.querySelector(".azul");
    cor_azul=this.value;
    azul.style.backgroundColor='rgb(0,0,'+ this.value+')';
    setCorResultado();
  });

  function setCorResultado(){
    var corResultado=document.querySelector(".lata_cor_resultado");
    corResultado.style.backgroundColor='rgb('+cor_vermelho+','+cor_verde+','+cor_azul+')'
    if(cor_vermelho==r && cor_verde==g && cor_azul==b ){
        newPopup();
    }
  }

  function setarCorQuestao(){
    r=Math.floor(Math.floor(Math.random() * 255)/5)*5;
    g=Math.floor(Math.floor(Math.random() * 255)/5)*5;
    b=Math.floor(Math.floor(Math.random() * 255)/5)*5;
    var elementoCasaCorQuestao=document.querySelector(".lata_cor_questao");
    elementoCasaCorQuestao.style.backgroundColor='rgb('+r+','+g+','+b+')'
  }

  function newPopup(){
    varWindow = window.open ('venceu.html', 'venceu')
    }


