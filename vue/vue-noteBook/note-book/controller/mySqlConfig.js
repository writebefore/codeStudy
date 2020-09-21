const mysql = require("mysql");
const config = require("./defaultConfig.js");

// 连接线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
});

// 统一连接数据库的方法
const allServices = {
  query(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        // 建立数据库连接
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            connection.release(); // 释放连接
          });
        }
      });
    });
  },
};

// 读取users表所有数据
const getAllUsers = function () {
  let _sql = `select * from users;`;
  return allServices.query(_sql);
};

// 用户登录
const userLogin = function (username, userpwd) {
  let _sql = `select * from users where username ="${username}" and userpwd ="${userpwd}";`;
  console.log(_sql);
  return allServices.query(_sql);
};

// 查找用户
const findUser = function (username) {
  let _sql = `select * from users where username ="${username}";`;
  return allServices.query(_sql);
};

//  用户注册
const insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`;
  return allServices.query(_sql, value);
};

// 根据分类名查找对应的笔记列表
const findNoteListByType = function (note_type, useId) {
  const _sql = `select * from note where note_type="${note_type}" and useId="${useId}";`;
  return allServices.query(_sql);
};

// 根据文章id查找文章详情
const findNoteDetailById = function (id) {
  let _sql = `select * from note where id="${id}";`;
  return allServices.query(_sql);
};

const userService = {
  getAllUsers,
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById,
};
// 导出方法
module.exports = userService;
