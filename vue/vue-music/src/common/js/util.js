const debounce = function(fn, delay){
    let timer = null;
    return function(...args){

        if(timer){
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null;
        }, delay)
    }
}

const findIndex = (list, song) => {
    return list.findIndex(item => {
        return item.id == song.id
    })
}

export {
    debounce,
    findIndex,
}