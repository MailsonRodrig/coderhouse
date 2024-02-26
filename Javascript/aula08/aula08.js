class Lanche {
  constructor(nome, valor, quantidade, ingredientes) {
    this.nome = nome;
    this.valor = parseFloat(valor);
    this.ingredientes = ingredientes;
    this.quantidade = quantidade;
  }

  somaTotal() {
    let somaValor = this.quantidade * this.valor;
    return console.log("---->  Valor Total: R$ " + somaValor);
  }

  listaIngredientes() {
    for (let x in lanche01.ingredientes) {
      console.log(lanche01.ingredientes[x]);
    }
  }
}

let lanche01 = new Lanche("Hamburguer", 15.99, 2, [
  "pão",
  "frango grelhado",
  "queijo",
  "alface",
  "tomate",
  "maionese",
]);
let lanche02 = new Lanche("Vegetariano", 10.99, 1, [
  "tortilha",
  "atum",
  "queijo cheddar",
  "alface",
  "tomate",
  "molho de iogurte",
]);

console.log("========= " + lanche01.nome + " =========");
lanche01.listaIngredientes();
lanche01.somaTotal();

console.log("========= " + lanche02.nome + " =========");
lanche02.listaIngredientes();
lanche02.somaTotal();


