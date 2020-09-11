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



export {
    debounce,
}