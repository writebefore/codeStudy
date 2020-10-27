/*
 * @Author: LHN
 * @Date: 2020-10-23 14:56:19
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-23 15:17:08
 * @description: In User Settings Edit
 * @FilePath: \vue-rfc\src\useDrag.js
 */
import { ref } from "vue";

export default function useDrag() {
  const x = ref(0);
  const y = ref(0);
  const handleMove = (e) => {
    x.value = e.touches[0].pageX;
    y.value = e.touches[0].pageY;
  };
  return {
    x,
    y,
    handleMove,
  };
}
