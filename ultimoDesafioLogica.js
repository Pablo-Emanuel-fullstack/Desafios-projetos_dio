class Jogador{
    constructor(Nome,Idade,Classe){
            this.Nome=Nome
            this.Idade=Idade
            this.Classe=Classe
}
        Atacar(){
           
            if (this.Classe === "Guerreiro")
             console.log(`O ${this.Classe} atacou usando espada`)
                else if (this.Classe==="Mago")
                    console.log(`O ${this.Classe} atacou usando magia `)
                    else if (this.Classe==="Monge")
                        console.log(`O ${this.Classe} atacou usando artes marciais`)
                        else if (this.Classe==="Ninja")
                            console.log(`O ${this.Classe} atacou usando shuriken`)
                        else
                            console.log("Adicione uma classe valida")
        }
}
let player= new Jogador("Pablo",18,"arqueiro")
player.Atacar()