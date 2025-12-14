let nickname ="ygfdueh"
let vitorias =15
let derrotas =25
function rankeada(){
    let ranking =vitorias-derrotas 
    if (ranking==0 && ranking<10){
    console.log("O Heroi"+nickName+" obeteve "+vitorias+" vitorias, está no ranking FERRO")
}       else if  (ranking>11 && ranking <=20){
             console.log("O Heroi"+nickName+" obeteve "+vitorias+" vitorias, está no ranking BRONZE")
}           else if(ranking>21 && ranking<=50){
                console.log("O Heroi"+nickName+" obeteve "+vitorias+" vitorias, está no ranking PRATA")
}               else if(ranking>51 && ranking<=80){
                    console.log("O Heroi"+nickName+" obeteve "+vitorias+" vitorias, está no ranking OURO")
}                   else if(ranking>81 && ranking<=90){
                        console.log("O Heroi"+nickName+" obeteve "+vitorias+" vitorias, está no ranking DIAMANTE")                    
}                       else if(ranking>91 && ranking<=100){
                            console.log("O Heroi"+nickName+" obeteve "+vitorias+" vitorias, está no ranking LENDÁRIO")
}                           else if(ranking>100){
                                console.log("O Heroi"+nickName+" obeteve "+vitorias+" vitorias, está no ranking IMORTAL")
}  else{
    console.log("jogue mais umas partidas e volte aqui para obter ramking")
}
}
console.log(rankeada())