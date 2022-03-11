
// Object that stores the input values
let family = {
    income: [700, 2500, 220, 500, 80,55],
    expenses: [380, 125, 395, 155, 250, 5.55],
}

function GetBalance(income,expenses) {
    // The sum of all incomes and expenses counted sapareted in two distinct variables
    let incomeTotal = 0;
    let expensesTotal = 0;
    
    // Count of the elements of income/ expenses arrays.
        incomeLeng = income.length
        expensesLeng = expenses.length
               
     // Using the number of elements in the array to set the maximum value to "for" estructure   
            for(let i = 0; i < incomeLeng; i++) {
                incomeTotal = income[i] + incomeTotal // Sum of each element of the array
            }
     // Using the number of elements in the array to set the maximum value to "for" estructure         
            for(let u = 0; u < expensesLeng; u++) {
                expensesTotal = expenses[u] + expensesTotal // Sum of each element of the array
            }


        let result = 0;

        result = incomeTotal - expensesTotal

            if (result > 0) {
                console.log('O balanço financeiro é positivo e vale: ' , 'R$' + result)
            } else {
                console.log('O balanço financeiro é negativo e vale: ' , 'R$' + result)
            }

}

function sumArray(array) {
    let total = 0;
    
    for(let value of array)
        total += value
    return total
}

function calculateBalance() {
    let balancetotal = sumArray(family.income) - sumArray(family.expenses)
        if(balancetotal >= 0) {
            console.log("O Saldo é positivo e vale:" , "R$" + balancetotal)
        } else{
            console.log("O Saldo é positivo e vale:" , "R$" + balancetotal)
        }
}


GetBalance(family.income,family.expenses)
calculateBalance()
