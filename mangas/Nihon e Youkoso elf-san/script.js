var capitulos = document.querySelector('.container')

var num = 2 //informe quantas pastas tera o manga/manhaw

let pastas = [];

for (let i = 1; i <= num; i++) {
    pastas.push({ numero: `${i < 10 ? "0" : ""}${i}`, nome: `Capitulo ${i < 10 ? "0" : ""}${i}` })
}

pastas.push({ numero: '03.1', nome: 'capitulo 03.1' })

for (let i = 3; i <= 5; i++) {
    pastas.push({ numero: `${i < 10 ? "0" : ""}${i}`, nome: `Capitulo ${i < 10 ? "0" : ""}${i}` })
}

pastas.push({ numero: '05.5', nome: 'capitulo 05.5' })
pastas.push({ numero: '05.6', nome: 'capitulo 05.6' })
pastas.push({ numero: '05.1', nome: 'capitulo 05.1' })
pastas.push({ numero: '05.2', nome: 'capitulo 05.2' })
pastas.push({ numero: '05.3', nome: 'capitulo 05.3' })


for (let i = 6; i <= 34; i++) {
    pastas.push({ numero: `${i < 10 ? "0" : ""}${i}`, nome: `Capitulo ${i < 10 ? "0" : ""}${i}` })
}

pastas.push({ numero: '34.5', nome: 'capitulo 34.5' })

for (let i = 35; i <= 40; i++) {
    pastas.push({ numero: `${i < 10 ? "0" : ""}${i}`, nome: `Capitulo ${i < 10 ? "0" : ""}${i}` })
}



console.log(pastas)

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