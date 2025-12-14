let nickName = "Carlinhos2"
let  expJogador= 8003

// CLASSIFICAÇÃO DE NIVEL 
switch (true){
        case (expJogador<=1000):
            console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel FERRO")
        break
        case (expJogador>=1001 && expJogador<=2000):
            console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel BRONZE")
        break
        case (expJogador>=2001 && expJogador<=5000):
            console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel PRATA")
            break
        case (expJogador>=5001 && expJogador<=7000):
            console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel OURO")
            break
        case (expJogador>=7001 && expJogador<=8000):
            console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel PLATINA")
            break;
        case (expJogador>=8001 && expJogador<=9000):
            console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel ASSCENDENTE")
            break;
        case (expJogador>=9001 && expJogador<=10000):
            console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel IMORTAL")
            break        
}
if (expJogador>=10001){
    console.log("o jogador "+nickName+" possui "+expJogador+" de XP portanto está no nivel RADIANTE")
}