let heroi = "Hercules"
let xpHeroi =3121
let classificacao=""

if (xpHeroi < 1000){
  classificacao = "Ferro"

}else if(xpHeroi > 1001 && xpHeroi <2000){
classificacao = "Bronze"

}else if (xpHeroi> 2001 && xpHeroi<5000){
classificacao = "Prata"

}else if (xpHeroi > 50001 && xpHeroi<7000){
classificacao = "Ouro"

}else if (xpHeroi > 70001 && xpHeroi< 8000){
classificacao = "Platina"

}else if (xpHeroi > 80001 && xpHeroi< 9000){
classificacao = "Ascendente"

}else if (xpHeroi > 90001 && xpHeroi<10000){
classificacao ="Imortal"

}else if (xpHeroi <=10001){
classificacao = "Radiante"
}


// Log to console
console.log(`O Herói de nome ${heroi} está no nível de ${classificacao}`)