// serve para desestruturar um objeto criando variaveis
let carro = {
  marca: 'Renault',
  modelo: 'Kwid',
  ano: 2019,
  possuiGarantia: true
};

// ele cria variaveis mantendo o objeto, porem agora é possivel utilizar as variaveis de forma individual
let { marca, modelo, ano, possuiGarantia } = carro;

console.log(carro.marca); // objeto original

console.log(marca); // variaveis criadas com os valores do objeto
console.log(modelo);
console.log(ano);
console.log(possuiGarantia);