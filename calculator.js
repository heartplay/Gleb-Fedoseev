const resultElement = document.getElementById('result') // получение кнопок и инпутов через айди
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const umnojenieBtn = document.getElementById('umnojenie')
const delenieBtn = document.getElementById('delenie')

let action = '+' // сложение по умолчанию

plusBtn.onclick = function () {  // присвоение кнопкам символа операции
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}

umnojenieBtn.onclick = function () {
    action = '*'
}

delenieBtn.onclick = function () {
    action = '/'
}

function printResult(result) { // функция вывода результата
    if (result < 0) {
        resultElement.style.color = 'red'
    }
    else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) { // функция выполнения операции
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    switch (actionSymbol) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/': {
            return num2 == 0 
                ? alert('На ноль делить нельзя! По крайней мере, так говорили в школе...') 
                : (num1 / num2)
        }
    }
}


// function computeNumbersWithAction(inp1, inp2, actionSymbol) { // функция выполнения операции
//     const num1 = Number(inp1.value)
//     const num2 = Number(inp2.value)
//     if (actionSymbol == '+') {
//         return num1 + num2
//     }
//     if (actionSymbol == '-') {
//         return num1 - num2
//     }
//     if (actionSymbol == '*') {
//         return num1 * num2
//     }
//     if (actionSymbol == '/') {
//         if (num2 == 0) {
//             alert('На ноль делить нельзя! По крайней мере, так говорили в школе...')
//         }
//         else {
//             return num1 / num2
//         }
//     }
// }

submitBtn.onclick = function () { // функция выполнения операции и вывода результата
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

}