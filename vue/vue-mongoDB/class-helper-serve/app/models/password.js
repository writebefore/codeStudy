/*
 * @Author: LHN
 * @Date: 2020-10-02 10:42:58
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 10:43:51
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\app\models\password.js
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PasswordSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
}, { collection: 'password', versionKey: false});

module.exports = mongoose.model('password', PasswordSchema);
