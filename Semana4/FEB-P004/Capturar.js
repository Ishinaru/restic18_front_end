function getDados(idBotao){
    const destino = document.getElementById(idBotao);
    const nomeDestino = destino.querySelector('h4').innerText;
    const descricaoDestino = Array.from(destino.querySelectorAll('ul li')).map(item => item.innerText);
    const precoDestino = destino.querySelector('h3').innerText;
    const taxasInclusas = destino.querySelector('p').innerText;

    const pacoteTuristico = {
        nomeDestino,
        descricaoDestino,
        precoDestino,
        taxasInclusas
    };

    console.log(JSON.stringify(pacoteTuristico));
}
    
document.getElementById('Salvador').addEventListener('click', function(){
    getDados('Salvador');
});

document.getElementById('Fortaleza').addEventListener('click', function(){
    getDados('Fortaleza');
});

document.getElementById('Campinas').addEventListener('click', function(){
    getDados('Campinas');
});

