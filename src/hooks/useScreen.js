import { ref, onMounted, nextTick } from 'vue'

export default function useScreen(idClassName) {
    const width = ref(0)
    const height = ref(0)
    let dom
  
    onMounted(() => {
        dom = document.getElementById(idClassName)
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
    })

    return {
        width,
        height
    }
}