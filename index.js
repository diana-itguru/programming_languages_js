//task 1
/*function Task3_1(Begin, End, Step = 1) {
    let arr = []

    for (let i = Begin; i <= End; i += Step) {
        arr.push(i)
    }
    return arr
}

console.log("Task 3.1:" + Task3_1(1, 12, 3))*/

//task 2
/*function Task3_2 (Str) {
let rev_Str = "";
for (let i = Str.length - 1; i >= 0; i--) {
        rev_Str += Str[i]
    }
    return rev_Str
}
 
console.log(Task3_2("123456"));*/

//TASK 3
function BankNumberS (BankNum, S = "XXXXXX") {
    let SBankNum = "";
    const firstSix = BankNum.slice(0, 6); //это срезы из пайтона, типа копируют кусок от первых шести символов, не повреждая оригинал
    const lastFour = BankNum.slice(-4); //тоже самое, что и сверху, только с последние четыре (синтаксис подсмотрела у ИИ)
    return `${firstSix}${S}${lastFour}` //это шаблонные тексты, выводы
}

console.log (BankNumberS("4815154823541789"));