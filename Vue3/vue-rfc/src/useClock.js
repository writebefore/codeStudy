import { onMounted, computed, ref } from 'vue';

export default function useClock(){
    const d = ref(new Date());
    onMounted(() => {
        d.value = new Date
    },1000)
    const timeStr = computed(() => {
        const arr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
        let week = arr[d.value.getDay()];
        return week + d.value.toLocaleDateString();
    })
    return {
        timeStr,
    }
}