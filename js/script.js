var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criamoscatempo = 1500

var nivel = location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  //1500
  criamoscatempo = 1500
} else if (nivel === "dificil") {
  ///1000
  criamoscatempo = 1000
} else {
  //750
  criamoscatempo = 750
}

function ajustaPalco() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}

ajustaPalco();

var cronometro = setInterval(() => {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criamosca);

    location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function posicaorandomica() {
  //remove mosca anterior
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    //pontos de vida
    if (vidas > 3) {
      location.href = "fim_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "img/coracao_vazio.png";

      vidas++;
    }
  }

  var posicaox = Math.floor(Math.random() * largura) - 90;
  var posicaoy = Math.floor(Math.random() * altura) - 90;

  posicaox = posicaox < 0 ? 0 : posicaox;
  posicaoy = posicaoy < 0 ? 0 : posicaoy;

  console.log(posicaox, posicaoy);

  //cria elemento
  var mosca = document.createElement("img");
  mosca.src = "img/mosca.png";
  mosca.className = tamanhoaleatoria() + " " + ladoaleatorio();
  mosca.style.left = posicaox + "px";
  mosca.style.top = posicaoy + "px";
  mosca.style.position = "absolute";
  mosca.id = "mosquito";
  mosca.onclick = function () {
    this.remove();
  };
  document.body.appendChild(mosca);
  console.log(tamanhoaleatoria());
}

function tamanhoaleatoria() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosca1";
    case 1:
      return "mosca2";
    case 2:
      return "mosca3";
  }
}

function ladoaleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
