var Manga = document.querySelector('.container')

let mangas = [
    {
        'pasta' : 'Ano Oni Kyoushi ga Boku no Ane ni Narundesuka',
        'nome' : 'Ano Oni Kyoushi ga Boku no Ane ni Narundesuka',
    },
    {
        'pasta' : 'Sensei Wa Koi Wo Oshie Rarenai',
        'nome' : 'Sensei Wa Koi Wo Oshie Rarenai',
    },
    {
        'pasta' : 'Kumo desu ga, Nani ka',
        'nome' : 'Kumo desu ga, Nani ka',
    },
    {
        'pasta' : 'Love Comedy Manga ni Haitteshimatta node, Oshi no Make Heroine wo Zenryoku de Shiawase ni Suru',
        'nome' : 'Love Comedy Manga ni Haitteshimatta node',
    },
    {
        'pasta' : 'Isekai de Tochi wo Katte Noujou wo Tsukurou',
        'nome' : 'Isekai de Tochi wo Katte Noujou wo Tsukurou',
    },
    {
        'pasta' : 'Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago',
        'nome' : 'My Wife Is From a Thousand Years Ago',
    },
    {
        'pasta' : 'Knight of the Frozen Flower',
        'nome' : 'Knight of the Frozen Flower',
    },
    {
        'pasta' : 'My Childhood Friend Became an Obsessive Male Lead',
        'nome' : 'My Childhood Friend Became an Obsessive Male Lead',
    },
    {
        'pasta' : 'A Proprietária Bebê Está se Aposentando',
        'nome' : 'A Proprietária Bebê Está se Aposentando',
    },
    {
        'pasta' : 'De Tantas Coisas, Me Tornei um Corvo',
        'nome' : 'De Tantas Coisas, Me Tornei um Corvo',
    },
    {
        'pasta' : 'Nihon e Youkoso elf-san',
        'nome' : 'Nihon e Youkoso Elf-san (Welcome to Japan, Elf-san)',
    },
    {
        'pasta' : 'Bon Appétit!',
        'nome' : 'Bon Appétit!',
    },
];

 mangas.forEach((manga) => {
    let manga_element = `
        <a class="box" href="./${manga.pasta}/index.html">
            <img src="./img/${manga.pasta}.jpg">
            <div class="titulo">
                <span>${manga.nome}</span>
            </div>
        </a>
    `;
    Manga.innerHTML += manga_element;
 });
