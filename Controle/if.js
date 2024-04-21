function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("provado com "+ nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...'+valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo(10)