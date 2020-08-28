package main //声明包  //模块化 modules
// go 天生支持多核计算的云开发时代C语言
// node + go 服务器
// such as import require
import (
	"fmt" // 向命令行输出helloworld format
) //es6
//node 脚本类的
//go 二进制文件
// 编译原理 
// 函数是组织代码的最小单元 { 块级作用域 }
func minEattingSpeed(arr []int, H int) int {
	low := 1 //let low = 1;
	// go 是一个静态，类型约束
	// 最大pile的数量是 11,交个一个函数
	high := maxPiles(arr)
	fmt.Printf("%d\n", high)
	return low
}

func maxPiles(piles []int) int {
	max := 0;
	for key,n := range piles {
		max = maxOne(max,n)
		fmt.Printf("%d--%d\n", key,n);
	}
	return max
}

func maxOne(a int, b int) int {
	if b > a{
		return b
	}
	return a
}
func main(){// func 函数关键字
	// 从main开始
	fmt.Printf("%d小时之内吃完香蕉的最慢速度是%d只/小时", 8, minEattingSpeed([]int {3,6,7,11},8));
}