 
function exibirValores(valor){
    let valorInt = 1
    for(let i=1; i<=valor; i++){
        valorInt = i * valorInt
        console.log(valorInt)
    }
}

exibirValores(7)