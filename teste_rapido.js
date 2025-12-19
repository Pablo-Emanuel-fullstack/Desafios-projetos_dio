const gamer={
    nome:"Pablito o Devastador",
    classe:"Paladino",
    nivel:15,
    habilidades:["Cura", "Golpe Sagrado", "Escudo divino"],
    equipamento:{
        arma:["Martelo Sagrado", "Lança do Destino"],
        defesa:["escudo de Miguel" ,"Manto Sagrado"],
    }

}
console.log("Nome: "+gamer.nome)
console.log("Classe: "+gamer.classe)
console.log("Habilidades ")
gamer.habilidades.forEach(l=>console.log("-"+l))
console.log("Arma: "+gamer.equipamento.arma[1])
console.log("Defesa : "+gamer.equipamento.defesa[1]) 
