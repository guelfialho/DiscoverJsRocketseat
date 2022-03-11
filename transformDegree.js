function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Degree not found')  
    }
    
    let upgradedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit -32) * 5/9 
    let degreeSign = 'C'

    if(celsiusExists) {
        upgradedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(upgradedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    console.log(transformDegree('40T'))
    // transformDegree('50X') error
} catch (error) {
    console.log(error.message)
}