<template>
  <div id="app">
    <!-- 顶部栏 -->
    <v-header></v-header>
    <router-view />
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header.vue';
import { getSeller } from '@/api';
import qs from 'query-string';

export default {
  components: {
    VHeader,
  },
  data() {
    return {
      seller: {
        // eslint-disable-next-line no-restricted-globals
        id: qs.parse(location.search).id,
      },
    };
  },
  methods: {
    // eslint-disable-next-line no-underscore-dangle
    _getSeller() {
      getSeller({
        id: this.seller.id,
      }).then((seller) => {
        // eslint-disable-next-line no-console
        console.log(seller);
      });
    },
  },
  created() {
    // eslint-disable-next-line no-underscore-dangle
    this._getSeller();
  },
};
</script>

<style lang="stylus" scoped></style>
