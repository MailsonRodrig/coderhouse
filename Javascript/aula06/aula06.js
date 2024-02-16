
function calcularParcelas (valorProduto, qtdParcelas,parteValor){

 let calcularParcelas = (valorProduto - parteValor) / qtdParcelas

 for( let i=0; i<qtdParcelas; i++){
  console.log(` Faltam ${qtdParcelas-i}/${qtdParcelas} parcelas de R$ ${calcularParcelas.toFixed(2)} `  )  
 }
}

calcularParcelas(1000,12,500)