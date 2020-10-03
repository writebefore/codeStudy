/*
 * @Author: LHN
 * @Date: 2020-10-03 11:18:44
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-03 11:41:24
 * @description: In User Settings Edit
 * @FilePath: \分治\归并排序.js
 */
const merge_sort = function (arr) {
  if (arr.length == 1) return 1; // 出口

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge_sort(merge_sort(left), merge_sort(right));
};

const Merge = function (a, b) {
  let n = a && a.length;
  let m = b && b.length;
  let c = [];
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (a[i] < b[j]) {
      c.push(a[i++]);
    } else {
      c.push(b[j++]);
    }
  }
  while (i < n) {
    c.push(a[i++]);
  }
  while (j < m) {
    c.push(b[j++]);
  }
  return c;
};
