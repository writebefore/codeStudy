/*
 * @Author: LHN
 * @Date: 2020-10-01 16:50:12
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 15:51:33
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\routes\api\user_router.js
 */
const Router = require("koa-router");

const router = new Router();
const user_controller = require("../../app/controllers/user_controller");

router.get("/get", user_controller.get);
router.post("/login", user_controller.login);
router.post("/register", user_controller.register);

module.exports = router;
