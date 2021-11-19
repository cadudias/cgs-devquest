const boletoPago = true; /* boleto está pago */

function verificarBoleto(boletoPago) {
  // a condição vai aqui para verificar se o boleto
  // está pago ou não
  if(boletoPago) {
    return 'o boleto está pago'
  }
}

const resultado = verificarBoleto(boletoPago);
console.log(resultado);
