/*
 * @Author: LHN
 * @Date: 2020-09-24 19:18:14
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-24 21:31:51
 * @description: In User Settings Edit
 * @FilePath: \event-loop\index.js
 */
// setTimeout(() => {
//     console.log(1);
// },0)

// new Promise((resolve, reject) => {
//     console.log(2);
// })


console.log('script start');

async function async1() {
  await async2()
  console.log('async1 end');
}

async function async2() {
  console.log('async2 end');
}
async1()

setTimeout(function() {
  console.log('setTimeout');
}, 0)

new Promise(resolve => {
  console.log('Promise');
  resolve()
})
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  })

console.log('script end');


// const a = async function(){
//     console.log(1);
// }

// const b = function(){
//     console.log(2);
// }
// a();
// b();
