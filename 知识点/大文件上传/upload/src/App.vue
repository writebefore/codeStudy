<!--
 * @Author: LHN
 * @Date: 2020-10-26 10:16:08
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-26 13:30:43
 * @description: In User Settings Edit
 * @FilePath: \upload\src\App.vue
-->
<template>
  <div>
    <input type="file" name="" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024; // 切片的大小
export default {
  data() {
    return {
      container: {
        file: null,
      },
      data: [],
    };
  },
  methods: {
    handleFileChange(e) {
      console.log(e);
      const [file] = e.target.files;
      if (!file) return;
      Object.assign(this.$data, this.$options.data());
      this.container.file = file;
    },
    async uploadChunks() {
      // eslint-disable-next-line no-unused-vars
      const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          console.log(formData);
          return { formData };
        })
        .map(async ({ formData }) => {
          
          this.requset({
            url: "http://127.0.0.1:3000",
            method: "post",
            data: formData,
          });
        });
      await Promise.all(requestList); // 并发上传
      await this.mergeRequest();
    },
    async mergeRequest() {
      await this.requset({
        url: "http://127.0.0.1/merge",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          filename: this.container.file.name,
        }),
      });
    },
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },
    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({ chunk: file, hash: this.container.file.name + "-" + index }));
      console.log(this.data);
      await this.uploadChunks();
    },
    // 封装一个原生的请求
    requset({ url, method = "post", data, headers = {} }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader("key", headers[key]);
        });
        xhr.send(data);
        xhr.onload = (e) => {
          resolve({
            data: e.target.response,
          });
        };
      });
    },
  },
};
</script>

<style></style>
