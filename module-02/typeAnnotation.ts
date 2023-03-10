let nome: string = 'Alberto'
console.log(`Oi, este é o ${nome}`)

// ARRAY
let animais: string[] = ['Elefente', 'Hipopótamo', 'Girafa', 'Tartaruga']
console.log(animais)

// OBJETO
let carro: {
    nome: string
    ano: number
    preco: number
}

carro = {nome: 'Toyota', ano:2019, preco:49560}
console.log(carro)

// FUNÇÃO
function multiplicarNumero(n1: number, n2: number){
    return n1 + n2
}

console.log(multiplicarNumero(2,5))

// vscode feito em typescript?

//BOOLEAN
//LETRA MINUSCULA -> TIPO PRIMITIVO
//LETRA MAIUSCULA -> TIPO OBJECT