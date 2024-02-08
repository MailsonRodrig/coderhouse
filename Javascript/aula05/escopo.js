
function capturarDadosUsuario() {
    let valorMercadoria = parseFloat(prompt("Digite o valor da mercadoria:"));
    let aliquotaICMS = parseFloat(prompt("Digite a alíquota de ICMS (%):"));

    return { valorMercadoria, aliquotaICMS };
}


function calcularICMS(valor, aliquota) {
    return valor * (aliquota / 100);
}

function exibirResultado(valorMercadoria, aliquotaICMS, valorICMS) {
    console.log(`Valor da Mercadoria: R$ ${valorMercadoria.toFixed(2)}`);
    console.log(`Alíquota de ICMS: ${aliquotaICMS.toFixed(2)}%`);
    console.log(`Valor do ICMS a ser pago: R$ ${valorICMS.toFixed(2)}`);
}


function calcularEExibirICMS() {
    const { valorMercadoria, aliquotaICMS } = capturarDadosUsuario();
    const valorICMS = calcularICMS(valorMercadoria, aliquotaICMS);

    exibirResultado(valorMercadoria, aliquotaICMS, valorICMS);
}

calcularEExibirICMS();
