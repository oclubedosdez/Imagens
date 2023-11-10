var capitulos = document.querySelector('.container')

var num = 26 //informe quantas pastas tera o manga/manhaw

let pastas = [];

for (let i = 1; i <= num; i++) {
    pastas.push({numero : `${i < 10 ? "0" : ""}${i}`, nome : `Capitulo ${i < 10 ? "0" : ""}${i}`})
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