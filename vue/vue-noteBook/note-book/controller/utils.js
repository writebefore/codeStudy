/*
 * @Author: LHN
 * @Date: 2020-09-16 20:23:06
 * @LastEditTime: 2020-09-16 20:29:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-noteBook\note-book\controller\utils.js
 */
let getNowFormatDate = function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if(month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <=9 ) {
        strDate = "0" + strDate
    }
    var currentDate = year + '年' + month + '月' + strDate + '日';
    return currentDate;
}

module.exports = {
    getNowFormatDate,
}