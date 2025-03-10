//variaveis compostas

let num = [5,8,8,2]

console.log(`Nosso vetor é o ${num}`)

num[4] = 6 //o quatro eh a posicao e o recebe eh o valor desejado

console.log(`Nosso vetor é o ${num}`)

num[2] = 'u' //o Dois eh a posicao e o recebe eh o valor desejado

console.log(`Nosso vetor é o ${num}`)

num.push(1)//adiciona o valor desejado sem precisar informar a chave

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor 4 eh o ${num[3]}`)

console.log(`Nosso vetor tem ${num.length} posicoes`)

console.log(`Nosso vetor é o ${num.sort()}`)

console.log(`O vetor 4 eh o ${num[3]}`)

let valor = num[2]
let pos = num.indexOf(5)
pos++
console.log(`O valor ${valor} esta na posicao ${pos}`)