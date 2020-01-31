var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function showAdress(endereco) {
    return "O usuário mora em " 
    + endereco.cidade + " / SP, no bairro " 
    + endereco.bairro + ", na rua " 
    + '"' + endereco.rua + '"' + " com n° "
    + endereco.numero + ".";
}

console.log(showAdress(endereco));