// 常见的类型

// any 可随意操作
let anyType: any; 
// anyType = true
// anyType = '123'
// anyType.foo.bar
// value()


// unknown 在进行赋值前无法被进一步操作
let unknownType: unknown;
// unknownType = 1
// unknownType = '56'
// unknownType = false
// unknownType = undefined
// unknownType.foo.bar 错误
// unknownType() 错误

// never 永远被定义为空数组
const empty: never[] = []
// empty.push(1) 错误
// function error(message: string): never{
//     throw new Error(message)
// }

// 数组
const arrList: string[] = ["1","2"]
const arrList1: Array<number> = [1,2,3] //泛型
const arrList2: (string | number)[] = ["1", 2] //元组

// 对象 
let obj: object
    // 数组和原组都是对象
obj = [1]
obj = [1, "2"]