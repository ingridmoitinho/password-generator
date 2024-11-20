// Função para validar o nome completo
function validarNome(nome) {
    return nome.trim().split(" ").length > 1;
}

// Função para obter o sobrenome em letras minúsculas
function obterSobrenome(nome) {
    const partes = nome.trim().split(" ");
    return partes[partes.length - 1].toLowerCase();
}

// Função para contar o número de vogais no nome
function contarVogais(nome) {
    const vogais = nome.match(/[aeiouáéíóúãõâêîôû]/gi);
    return vogais ? String(vogais.length).padStart(2, "0") : "00";
}

// Função principal para gerar a senha
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const resultadoDiv = document.getElementById("resultado");

    if (!validarNome(nome)) {
        resultadoDiv.textContent = "Por favor, insira um nome completo válido.";
        return;
    }

    const sobrenome = obterSobrenome(nome);
    const vogais = contarVogais(nome);
    const senha = sobrenome + vogais;

    resultadoDiv.textContent = `Senha inicial: ${senha}`;
});
