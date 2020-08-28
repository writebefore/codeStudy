const myAjax = function (method, url, data = {}, async = true) {
    const p = new Promise((resolve, reject) => {
        // 原生js做接口请求 XMLHttpRequest()
        const request = new XMLHttpRequest();
        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status == 200) {
                    resolve(JSON.parse(request.responseText))
                } else {
                    reject(JSON.parse(request.responseText))
                }
            }
        } 
        request.send(JSON.stringify(data))
    })
    return p;
}