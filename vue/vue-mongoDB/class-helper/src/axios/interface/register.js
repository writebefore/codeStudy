/*
 * @Author: LHN
 * @Date: 2020-10-02 11:54:38
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 11:55:51
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\axios\interface\register.js
 */
import axios from '../api'

const register = data => {
    return axios({
        url:'/register',
        method: 'post',
        data
    })
}


export default {
    register
}