


















function Fruta(nome, cor, pesoUnidade, estacao) {
   this.nome = nome;
   this.cor = cor;
   this.pesoUnidade = pesoUnidade;
   this.estacao = estacao;
 }

let fruta01 = new Fruta("Banana", "amarelo", 100, "Verão");

console.log(fruta01);
console.log(fruta01.nome);

for (const j in fruta01) {

    for (let i = 0; i < fruta01.length; i++) {
      console.log(fruta01[i] + i)
      
    }

}

