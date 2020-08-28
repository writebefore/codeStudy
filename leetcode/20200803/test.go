package main

import (
	"fmt"
	"math"
)

/*
	求最小吃的速度
*/
func minEatingPilesSpeed(piles [] int ,H int) int {
	
	res := maxPile(piles)
	//                            预校验
	for canEatAll(piles,res,H) && canEatAll(piles,res-1,H){
		res --
	}

	return res
}

/*
	是否能吃完
	piles-香蕉个数数组 speed-吃的速度 h-规定时间 
*/
func canEatAll(piles [] int,speed int,h int) bool{
	spend := float64(0) //花费时间

	// 计算总耗时
	for i := 0;i < len(piles);i ++{
		spend += math.Ceil(float64(piles[i])/float64(speed))
	}
	// 是否能在规定时间吃完
	if spend > float64(h) {
		return false
	}
	return true
}
/*
	求最大香蕉个数
*/
func maxPile(piles [] int) int {
	max := 0;
	for key,value := range piles{
		fmt.Printf("key: %d,value: %d\n",key,value)
		max = maxOne(max,value);
	}
	return max
}

/*
	函数求最大值
*/
func maxOne(a int,b int) int {
	if a > b {
		return a
	}
	return b
}




/*
	主函数入口
*/
func main() {
	h := 8;
    // piles := []int{3,6,7,11} 待解决？
	fmt.Printf("%d小时之内吃完香蕉的最小速度是%d",h,minEatingPilesSpeed([]int {3,6,7,11},h));	
}