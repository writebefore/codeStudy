/**
 * 尾调用
 * @param {递归的数} arg 
 * @param {结果} res 
 */
const multiple1 = function (arg, res = 1) {
  if (arg <= 1) {
    return res;
  }
  res = arg * res;

  return multiple1(arg - 1, res);
};
console.log(multiple1(100));


/**
 * 非尾调用
 * @param {阶乘值} arg 
 */
const multiple2 = function (arg) {
  if (arg <= 1) {
    return 1;
  }
  return arg * multiple2(arg - 1);
};
console.log(multiple2(100));
