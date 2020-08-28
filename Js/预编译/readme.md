# 预编译 发生在函数执行之前

四部曲：
1.创建AO对象(activation Object)
2.找形参和变量声明，将变量和形参名作为AO属性名，值为undefined
3.将实参值和形参统一
4.在函数体里面找函数声明，将函数名作为AO对象的属性名 值赋予函数体

全局下的预编译
1.创建GO对象
2.找形参和变量声明，将变量声明和形参作为GO的属性名，值为undefined
3.在函数体里面找函数声明，将函数名作为GO对象的属性名 值赋予函数体

go
global 100
fn ao:
    global undefined 200 300

out undefined 200
