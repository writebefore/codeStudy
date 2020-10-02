/*
 * @Author: LHN
 * @Date: 2020-10-02 10:57:06
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 11:16:09
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\utils\passport.js
 */
const bcrypt = require('bcrypt');

const encrypt = async (password, saltTimes) => {
    const hash = await bcrypt.hash(password, saltTimes);
    return hash;
}

const validate = async (password, hash) => {
    const match = await bcrypt.compare(password, hash)
    return match;
}

module.exports = {
    encrypt,
    validate,
}