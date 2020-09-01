import { get } from './helpers';

const getSeller = get('api/seller');
const getGoods = get('api/goods');
export {
  // eslint-disable-next-line import/prefer-default-export
  getSeller,
  getGoods,
};
