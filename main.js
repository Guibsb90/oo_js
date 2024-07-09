let peixesP = 3;
let peixesM = 2;
let peixesG = 1;

function Aquario(litragem, temperatura, ph) {
  this.litragem = litragem;
  this.temperatura = temperatura;
  this.ph = ph;
}

const aquario1 = new Aquario((peixesP * 5) + (peixesM * 10) + (peixesG * 20), 29, 7);
const aquario2 = new Aquario(2*peixesP * 5 + 4*peixesM * 10 + 7*peixesG * 20, 28, 6.7);

console.log(aquario1);
console.log(aquario2);
