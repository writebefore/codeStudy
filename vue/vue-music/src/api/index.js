import Vue from "vue";
import axios from "axios";

const vue = new Vue();

// axios 配置
axios.defaults.timeout = 10000; //超时时间
axios.defaults.baseURL = "http://127.0.0.1:3000";

// 返回状态判断 (响应拦截)
axios.interceptors.response.use(
  (res) => {
    if (res.data.code !== 200) {
      vue.$toast("网络异常");
      return Promise.reject(res);
    }
    return res;
  },
  (err) => {
    vue.$toast("服务器异常");
    return Promise.reject(err);
  }
);


export function fetchGet(url, param) {
  return new Promise( (resolve, reject) => {
    axios.get(url, {
        params: param
    })
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
  })
}

export default {
    // 用户登录
    Login(params) {
        return fetchGet('/login', params)
    },

    // 热门搜索
    HotSearchKey() {
        return fetchGet('/search/hot')
    },

    // 音乐搜索
    MusicSearch(params){
      console.log(params);
      return fetchGet('/search',params)
    },

    // 歌曲url
    MusicUrl(id) {
      return fetchGet('/song/url', {
        id
      })
    }
}