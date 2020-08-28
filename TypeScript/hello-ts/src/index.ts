function greeter(person: string): string {
    return "hello" + person
}

const user = "wn"


// 类型
// boolean number string null undefined symbol bigInt any void
let isLoading: boolean = false

let num: number = 6
let book: string = 'typeScript'

// 空值
function test(): void{
    
}

const a: void = undefined
let aa: any = undefined
let aaa = undefined
let sym: symbol = Symbol('a')
let sym2: symbol = Symbol('b')

// BigInt
let max = BigInt(Number.MAX_SAFE_INTEGER) 
let num1: bigint = 123n
let num2: bigint = 369n

