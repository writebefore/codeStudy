let i = 0;
console.log("inner:" + i);
(function (j) {
  for (; j < 10; j++) {
      console.log(j);
  }
})(i);

console.log("out i:" + i);
