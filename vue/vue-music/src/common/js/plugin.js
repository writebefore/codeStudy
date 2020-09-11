let Toast = {}
Toast.install = function(Vue, options) {
    let opt = {
        defaultType: 'center', // 显示的位置
        duration: '1500', // 持续的时间
    }

    for(let property in options){
      opt[property] = options[property]; // 使用 options 配置 
    }

    Vue.prototype.$toast = (tips, type) => {
        if(document.querySelector('.vue-toast')){
            return;
        }

        if (type) {
            opt.defaultType = type // 如果传了type， 那么就使用该type作为位置
        }

        let toastTpl = Vue.extend({
            template: '<div class="vue-toast toast-'+ opt.defaultType +' ">'+ tips +'</div>'
        });

        let tpl = new toastTpl().$mount().$el;
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild(tpl)
        }, opt.duration)
    }

    ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips, type)
        }
    })
}
    
export {
    Toast
}