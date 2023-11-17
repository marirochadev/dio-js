function SaldoRankeadas (numeroVitorias, numeroDerrotas){
    soma = numeroVitorias - numeroDerrotas
    return soma
  }
  
  let saldoVitorias = SaldoRankeadas(15,4)
  function getNivel(saldoVitorias) {
    let nivel;
    if (saldoVitorias <= 10) {
      nivel = "Bronze"
    } else if (saldoVitorias < 50) {
      nivel = "Prata"
    } else if (saldoVitorias < 80) {
      nivel = "Ouro"
    } else if (saldoVitorias < 90) {
      nivel = "Diamante"
    } else if (saldoVitorias < 100) {
      nivel = "Lendário"
    } else if (saldoVitorias >=101) {
      nivel = "Imortal"
    } 
  
    return nivel;
  } 
  
  const nivel = getNivel(saldoVitorias)
  
  // Log to console
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)