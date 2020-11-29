function debounce(delay, calback) {
    let task
    return function() {
        clearTimeout(task)
        task = setTimeout(() => {
            calback.apply(this, arguments)
        }, delay)
    }
}

export {
    debounce
}