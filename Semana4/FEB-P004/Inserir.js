function insertDados(){
    const destino = document.getElementById('destino').value;
    const imagem = document.getElementById('imagem').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    const novaViagem = document.createElement('div');
    novaViagem.classList.add('destino');

    novaViagem.innerHTML = `
        <img src="${imagem}" alt="${destino}">
        <h4>${destino}</h4>
        <p>${descricao}</p>
        <h3>${preco}</h3>
    `;

    document.querySelector('.container').appendChild(novaViagem);
}