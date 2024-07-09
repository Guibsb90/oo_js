let peixesP = 3;
let peixesM = 2;
let peixesG = 1;
//função construtora 
function Aquario(litragem, temperatura, ph) {
  this.litragem = litragem;
  this.temperatura = temperatura;
  this.ph = ph;
}
//Instâncias. Litragem calculada a partir do numero de peixes e a litragem exigida por cada um.
const aquario1 = new Aquario((peixesP * 5) + (peixesM * 10) + (peixesG * 20), 29, 7);
const aquario2 = new Aquario(2*peixesP * 5 + 4*peixesM * 10 + 7*peixesG * 20, 28, 6.7);
const aquario3 = new Aquario(5*peixesP * 5 + 6*peixesM * 10 + 10*peixesG * 20, 28, 6.7)

console.log(aquario1);
console.log(aquario2);
