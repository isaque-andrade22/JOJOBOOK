
async function BuscarDados(){
    const JsonDados = await(fetch("../dados/chars.json"));
    const dados = await JsonDados.json();
    const jojo1 = dados[0].nome;

    console.log("FUNCIONA?");
    console.log(jojo1);
    TrocarImagem(dados)
}

function TrocarImagem(dados){
    const img = document.querySelector("figure img");
    const nome = document.querySelector("h2");

    let NPT = 0;
    console.log(img);
    console.log(nome);

    img.src = dados[NPT].imagem;
    nome.innerText = dados[NPT].nome;
    console.log(dados[NPT].nome);
}

BuscarDados();