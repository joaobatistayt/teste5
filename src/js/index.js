const botoes = document.querySelectorAll(".botao");
const fatores = document.querySelectorAll(".fator");

botoes.forEach((botao, indice) => {
botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarFator();

    botao.classList.add("selecionado");
    fatores[indice].classList.add("selecionado");
});
});

function desselecionarFator() {
const fatorSelecionado = document.querySelector(".fator.selecionado");
fatorSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
const botaoSelecionado = document.querySelector(".botao.selecionado");
botaoSelecionado.classList.remove("selecionado");
}
