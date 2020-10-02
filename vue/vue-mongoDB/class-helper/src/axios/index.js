/*
 * @Author: LHN
 * @Date: 2020-10-01 16:05:34
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 14:42:52
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\axios\index.js
 */
import apiLogin from  './interface/login'
import apiRegister from './interface/register'

const install = (Vue) => {
    if(install.installed) {
        return
    }
    install.installed = true
    Object.defineProperties(Vue.prototype, {
        $http: {
            get () {
                return Object.assign(
                    {},
                    apiLogin,
                    apiRegister,
                )
            }
        }
    })
}



export default install