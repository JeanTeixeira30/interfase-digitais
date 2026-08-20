// Seleciona todos os botões da página
const botoes = document.querySelectorAll('button');

// Adiciona um evento de clique para cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Encontra o elemento <span> dentro do botão clicado
        const contador = botao.querySelector('span');
        
        // Pega o valor atual, converte para número e soma +1
        let quantAtual = parseInt(contador.innerText);
        contador.innerText = quantAtual + 1;
    });
});