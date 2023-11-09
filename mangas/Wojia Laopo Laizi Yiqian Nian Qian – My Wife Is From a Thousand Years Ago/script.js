var capitulos = document.querySelector('.container')



let pastas = [
    {
        'numero' : '01',
        'nome' : 'Capitulo 01'
    },
    {
        'numero' : '02',
        'nome' : 'Capitulo 02'
    },
    {
        'numero' : '03',
        'nome' : 'Capitulo 03'
    },
    {
        'numero' : '04',
        'nome' : 'Capitulo 04'
    },
    {
        'numero' : '05',
        'nome' : 'Capitulo 05'
    },
    {
        'numero' : '06',
        'nome' : 'Capitulo 06'
    },
    {
        'numero' : '07',
        'nome' : 'Capitulo 07'
    },
    {
        'numero' : '08',
        'nome' : 'Capitulo 08'
    },
    {
        'numero' : '09',
        'nome' : 'Capitulo 09'
    },
    {
        'numero' : '10',
        'nome' : 'Capitulo 10'
    },
    {
        'numero' : '11',
        'nome' : 'Capitulo 11'
    },
    {
        'numero' : '12',
        'nome' : 'Capitulo 12'
    },
    {
        'numero' : '13',
        'nome' : 'Capitulo 13'
    },
    {
        'numero' : '14',
        'nome' : 'Capitulo 14'
    },
    {
        'numero' : '15',
        'nome' : 'Capitulo 15'
    },
    {
        'numero' : '16',
        'nome' : 'Capitulo 16'
    },
    {
        'numero' : '17',
        'nome' : 'Capitulo 17'
    },
    {
        'numero' : '18',
        'nome' : 'Capitulo 18'
    },
    {
        'numero' : '19',
        'nome' : 'Capitulo 19'
    },
    {
        'numero' : '20',
        'nome' : 'Capitulo 20'
    },
    {
        'numero' : '21',
        'nome' : 'Capitulo 21'
    },
    {
        'numero' : '22',
        'nome' : 'Capitulo 22'
    },
    {
        'numero' : '23',
        'nome' : 'Capitulo 23'
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
