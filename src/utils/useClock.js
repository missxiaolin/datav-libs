import { ref } from 'vue'

/**
 * @param {*} v 
 */
function dataFilter(v) {
    const m = fillZero(v.getMonth() + 1)
    let d = fillZero(v.getDate())
    
    return `${v.getFullYear()}-${m}-${d}`
}

/**
 * @param {*} v 
 */
function timeFilter(v) {
    const h = fillZero(v.getHours())
    const m = fillZero(v.getMinutes())
    const s = fillZero(v.getSeconds())
    return `${h}:${m}:${s}`
}

/**
 * @param {*} v 
 */
function fillZero(v) {
    return v < 10 ? '0' + v : v
}

export function clock() {
    let now = new Date()
    const date = ref(dataFilter(now))
    const time = ref(timeFilter(now))

    return {
        date,
        time
    }
}