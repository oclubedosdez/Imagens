var capitulos = document.querySelector('.container')



let pastas = [
    {
        'numero' : '01',
        'nome' : 'Capitulo 01'
    },
    {
        'numero' : '02.1',
        'nome' : 'Capitulo 02.1'
    },
    {
        'numero' : '02.1',
        'nome' : 'Capitulo 02.2'
    },
];

pastas.forEach((pasta) => {
    let pasta_element = `
    <div class="box">
            <div class="imagen">
                <a href="./capitulo-${pasta.numero}/index.html">
                    <img src="./pasta.png" alt="">
                </a>
            </div>
            <div class="texto">
                <span>${pasta.nome}</span>
            </div>
        </div>
    `;
    capitulos.innerHTML += pasta_element;
})