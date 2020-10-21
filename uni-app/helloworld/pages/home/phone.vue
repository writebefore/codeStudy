<!--
 * @Author: LHN
 * @Date: 2020-10-17 14:44:00
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-17 14:57:17
 * @description: In User Settings Edit
 * @FilePath: \helloworld\pages\home\phone.vue
-->
<template>
  <view>
    <button type="primary" @tap="getPhone">获取联系人</button>
    <block v-for="(item, index) in list" :key="index">
      <view>{{ item.displayName }}</view>
      <block v-for="(subitem, idx) in item.phoneNumbers" :key="idx">
        <view>{{ subitem.value }}</view>
      </block>
    </block>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getPhone() {
      var that = this;
      plus.contacts.getAddressBook(
        plus.contacts.ADDRESSBOOK_PHONE,
        (addressbook) => {
          console.log(addressbook);
          addressbook.find(["displayName", "phoneNumbers"],
          (contacts) => {
            uni.showToast({
              title: "获取成功",
              duration: 2000,
            });
          });
          console.log(contacts)
          that.list = contacts
        },
        () => {
          uni.showToast({
            title: '获取失败',
            duration: 2000
          });
        }
      );
    },
  },
};
</script>

<style>
</style>