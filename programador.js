//Objetos e vetores

const programador = {
    nome: "Tatiana",
    idade: 26,
    tecnologias: [
        {nome: 'JavaScript', especialidade: 'Web/Mobile'},
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'}
    ]
}

console.log(`A programadora ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`)