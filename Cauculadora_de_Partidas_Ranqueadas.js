//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
let nickName ="Jeff"
let vitorias =98
let derrotas =2

function ranking(){
    let resultado=vitorias-derrotas

        return resultado
}
if (ranking()==0 && ranking()<10){
    console.log("O Herroi "+nickName+" obeteve "+vitorias+" vitorias, está no ranking FERRO")
}       else if  (ranking()>11 && ranking() <=20){
             console.log("O Herroi "+nickName+" obeteve "+vitorias+" vitorias, está no ranking BRONZE")
}           else if(ranking()>21 && ranking()<=50){
                console.log("O Herroi "+nickName+" obeteve "+vitorias+" vitorias, está no ranking PRATA")
}               else if(ranking()>51 && ranking()<=80){
                    console.log("O Herroi "+nickName+" obeteve "+vitorias+" vitorias, está no ranking OURO")
}                   else if(ranking()>81 && ranking()<=90){
                        console.log("O Herroi "+nickName+" obeteve "+vitorias+" vitorias, está no ranking DIAMANTE")                    
}                       else if(ranking()>91 && ranking()<=100){
                            console.log("O Herroi "+nickName+" obeteve "+vitorias+" vitorias, está no ranking LENDÁRIO")
}                           else if(ranking()>100){
                                console.log("O Herroi "+nickName+" obeteve "+vitorias+" vitorias, está no ranking IMORTAL")
}  else{
    console.log("jogue mais umas partidas e volte aqui para obter ranking")
}