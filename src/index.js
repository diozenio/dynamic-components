import { Button, Modal, Input } from "./components.js";

const container = document.querySelector(".container");

const features = document.querySelectorAll(".feature");

features.forEach((item) => {
  item.addEventListener("click", () => {
    switch (item.dataset.featureName) {
      case "maior_e_menor":
        MaiorEMenorModal();
        break;
      case "vogal":
        VogalModal();
        break;
      case "limites":
        LimitesModal();
        break;
      case "ordem":
        OrdemModal();
        break;
      case "pos_e_neg":
        PosENegModal();
        break;
      case "par_ou_impar":
        ParOuImparModal();
        break;
    }
  });
});

function MaiorEMenorModal() {
  const p = document.createElement("p");
  p.innerText = "Digite 5 números para saber qual é o maior e o menor";

  const a = new Input("a", "Digite um primeiro número");
  const b = new Input("b", "Digite um segundo número");
  const c = new Input("c", "Digite um terceiro número");
  const d = new Input("d", "Digite um quarto número");
  const e = new Input("e", "Digite um quinto número");

  const button = new Button("Calcular");

  const modal = new Modal("Maior e Menor", [p, a, b, c, d, e, button], (e) => {
    e.preventDefault();
    for (let i = 0; i < 5; i++) {
      if (isNaN(parseInt(e.target[i].value))) {
        alert("Digite apenas números");
        return;
      }
    }
    const numbers = [
      parseInt(e.target[0].value),
      parseInt(e.target[1].value),
      parseInt(e.target[2].value),
      parseInt(e.target[3].value),
      parseInt(e.target[4].value),
    ];

    const maior = Math.max(...numbers);
    const menor = Math.min(...numbers);

    alert(`O maior número é ${maior} e o menor é ${menor}`);
  });

  container.appendChild(modal);
}

function VogalModal() {
  const p = document.createElement("p");
  p.innerText = "Digite uma letra para saber se é vogal ou não";

  const a = new Input("a", "Digite uma letra");

  const button = new Button("Verificar");

  const modal = new Modal("Vogal", [p, a, button], (e) => {
    e.preventDefault();
    const vogais = ["a", "e", "i", "o", "u"];
    const letra = e.target[0].value;
    if (vogais.includes(letra)) {
      alert("1");
    } else {
      alert("0");
    }
  });

  container.appendChild(modal);
}

function LimitesModal() {
  const p = document.createElement("p");
  p.innerText =
    "Digite dois números para saber todos os números pares no intervalo aberto e seu somatório";

  const a = new Input("a", "Digite o limite inferior");
  const b = new Input("b", "Digite o limite superior");

  const button = new Button("Calcular");

  const modal = new Modal("Limites", [p, a, b, button], (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      if (isNaN(parseInt(e.target[i].value))) {
        alert("Digite apenas números");
        return;
      }
    }
    const inferior = parseInt(e.target[0].value);
    const superior = parseInt(e.target[1].value);
    let soma = 0;
    let pares = [];
    for (let i = inferior + 1; i < superior; i++) {
      if (i % 2 === 0) {
        pares.push(i);
        soma += i;
      }
    }
    alert(`Os números pares são ${pares} e a soma deles é ${soma}`);
  });

  container.appendChild(modal);
}

function OrdemModal() {
  const p = document.createElement("p");
  p.innerText = "Digite 3 números para saber a ordem crescente deles";

  const a = new Input("a", "Digite o primeiro número");
  const b = new Input("b", "Digite o segundo número");
  const c = new Input("c", "Digite o terceiro número");

  const button = new Button("Calcular");

  const modal = new Modal("Ordem", [p, a, b, c, button], (e) => {
    e.preventDefault();
    for (let i = 0; i < 3; i++) {
      if (isNaN(parseInt(e.target[i].value))) {
        alert("Digite apenas números");
        return;
      }
    }
    const numbers = [
      parseInt(e.target[0].value),
      parseInt(e.target[1].value),
      parseInt(e.target[2].value),
    ];
    numbers.sort((a, b) => a - b);
    alert(`A ordem crescente dos números é ${numbers}`);
  });

  container.appendChild(modal);
}

function PosENegModal() {
  const p = document.createElement("p");
  p.innerText = "Digite um número para saber se é positivo ou negativo";

  const a = new Input("a", "Digite um número");

  const button = new Button("Verificar");

  const modal = new Modal("Positivo ou Negativo", [p, a, button], (e) => {
    e.preventDefault();
    const number = parseInt(e.target[0].value);
    if (number > 0) {
      alert(true);
    } else {
      alert(false);
    }
  });

  container.appendChild(modal);
}

function ParOuImparModal() {
  const p = document.createElement("p");
  p.innerText = "Digite um número para saber se é par ou ímpar";

  const a = new Input("a", "Digite um número");

  const button = new Button("Verificar");

  const modal = new Modal("Par ou Ímpar", [p, a, button], (e) => {
    e.preventDefault();
    const number = parseInt(e.target[0].value);
    if (number % 2 === 0) {
      alert(true);
    } else {
      alert(false);
    }
  });

  container.appendChild(modal);
}
