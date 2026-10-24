let peronName: string="Aditya Kiran"
let age: number= 24
let isGraduated: boolean=true

const bigNum: bigint= 4n ** 100n-1n

// Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed= bigNum+age

const TOKEN: unique symbol= Symbol("Token")

function yearToDay(year: number) :number{
    return year*365;

}

console.log(yearToDay(3))
// console.log(yearToDay("4")) //Argument of type 'string' is not assignable to parameter of type 'number'.
