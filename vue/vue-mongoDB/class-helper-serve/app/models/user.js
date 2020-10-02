/*
 * @Author: LHN
 * @Date: 2020-10-02 10:23:41
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 11:11:57
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\app\models\user.js
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userId: {
      type: String,
      unique: true,
      require: true
    },
    account: {
      type: String
    },
    userName: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    headerImg: {
      type: String
    },
    studentId: {
      type: String
    },
    school: {
      type: String
    },
    schoolId: {
      type: String
    },
    provinceId: {
      type: Number
    },
    major: {
      type: String
    },
    college: {
      type: String
    },
    wechat: {
      type: String
    },
    qq: {
      type: String
    },
    collections: {
      type: Array
    } 
  }, { collection: 'user', versionKey: false});
  
  module.exports = mongoose.model('user', UserSchema);