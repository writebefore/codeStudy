<template>
  <div class="movie-box">
    <van-image class="cover-image" radius="5px" :src="movie.image">
      <template v-slot:error>
        <img
          class="cover-image"
          src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg"
          alt=""
        />
      </template>
    </van-image>
    <div class="title">{{ movie.title }}</div>
    <Star :rating="movie.rating" />
  </div>
</template>

<script>
import { Image } from "vant";
import Star from "./Star";
export default {
  components: {
    Star,
    [Image.name]: Image,
  },
  props: ["movie"],
};
</script>

<style scoped>
.movie-box {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 205px;
  margin-left: 10px;
}
.cover-image {
  width: 100px;
  height: 145px;
}
.title {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  text-align: left;
  font-weight: bold;
}
</style>