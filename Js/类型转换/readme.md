- 所有的原始值都能转化为字符串

- 原始值转对象
  原始值直接通过调用 String() Number() 或者 Boolean()转化为他们各自的包装对象

- 对象转布尔值
  Boolean()

- 对象转字符串和数字
  toString() valueOf()

- 隐式类型转换
  一元操作符
  +会ToNumber 
  ToPrimitive(input,[preferredType])
  input
  preferredType,非必填，表示希望转换成的类型 Number 和 String
  如果 preferredType没传，当input是日期类型时，preferredType相当于String,其他情况下相当于Number


  ToPrimitive(obj,Number)
  1.如果obj是基本类型，直接返回
  2.否则，调用 valueOf，如果返回一个原始值，则js将其返回
  3.否则，调用toString，如果返回一个原始值，则js将其返回
  4.否则，js抛出一个类型错误异常

  ToPrimitive(obj,String)
  1.如果obj是基本类型，直接返回
  2.否则，调用toString，如果返回一个原始值，则js将其返回
  3.否则，调用valueOf，如果返回一个原始值，则js将其返回
  4.否则，js抛出一个类型错误异常

  - 二元操作符 a+b
  val1 + val2 => ToPrimitive(val1) + toPrimitive(val2)
