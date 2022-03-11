/* Crie um algoritimo que transforme o sistema de notas numérico num sistema de notas A B C 

* de 90 para cima - A
* entre 80 e 89 - B
* entre 70 e 79 - C
* entre 60 e 69 - D
* menor que 60 - F

*/ 


/* este código eu desenvolvi sozinho sem ver a correção, funcionou. Mas ele propôs transformar o codigo em uma função.

let score = ;
let digitado = score

let NotaA = score >= 90 && score <=100
let NotaB = score >= 80 && score <=89
let NotaC = score >= 70 && score <=79
let NotaD = score >= 60 && score <=69
let NotaF = score < 60  && score >= 0 

if (score = NotaA) {
    console.log('A nota '+ digitado , 'em sistema de caracteres é: A')
} else if (score = NotaB) {
    console.log('A nota '+ digitado , 'em sistema de caracteres é: B')
} else if (score = NotaC) {
    console.log('A nota '+ digitado , 'em sistema de caracteres é: C')
} else if (score = NotaD) {
    console.log('A nota '+ digitado , 'em sistema de caracteres é: D')
} else if (score = NotaF) {
    console.log('A nota '+ digitado , 'em sistema de caracteres é: F')
} else {
    console.log('Digite uma nota entre 0 e 100')
}
 */ 

function getScore(score) {
    
    let scoreFinal;

    let scoreA = score >= 90 && score <=100
    let scoreB = score >= 80 && score <=89
    let scoreC = score >= 70 && score <=79
    let scoreD = score >= 60 && score <=69
    let scoreF = score < 60  && score >= 0 
    
    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal ='Nota inválida! Digite uma nota entre 0 e 100.'
    }
    return(scoreFinal)
}

// bloco de validação da função :

console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(59))
console.log(getScore(60))
console.log(getScore(70))
console.log(getScore(80))
console.log(getScore(90))
console.log(getScore(100))
console.log(getScore(101))

