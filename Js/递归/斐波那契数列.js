/**
 * 尾调用4
 * @param {默认参数1} i 
 * @param {默认参数2} j 
 * @param {目标} k 
 */
const fib1 = function(k,i=1,j=1){
    if(k <= 2){
        return j;
    }
    let sum = i + j;
    return fib1(k-1,j,sum);
}
console.log("尾调用"+fib1(40));

/**
 * 非尾调用
 * @param {目标} k 
 */
const fib2 = function(k){
    if(k <= 2){
        return 1;
    }
    return fib2(k-1)+fib2(k-2);
}
console.log("非尾调用"+fib2(40));