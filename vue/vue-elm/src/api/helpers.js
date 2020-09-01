import axios from 'axios';

const baseUrl = 'http://ustbhuangyi.com/sell/';

// eslint-disable-next-line import/prefer-default-export
export function get(url) {
  // eslint-disable-next-line func-names
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params,
    // eslint-disable-next-line consistent-return
    }).then((res) => {
      const { errno, data } = res.data;
      if (errno === 0) {
        return data;
      }
    }).catch((err) => err);
  };
}
