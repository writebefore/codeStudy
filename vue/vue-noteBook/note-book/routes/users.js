const router = require("koa-router")();
const userService = require("../controller/mySqlConfig.js");
router.prefix("/users");

router.get("/all", async (ctx, next) => {
  await userService.getAllUsers().then((res) => {
    ctx.body = res;
  });
});

// 登录注册

router.post("/userRegister", async (ctx, next) => {
  const _username = ctx.request.body.username;
  const _userpwd = ctx.request.body.userpwd;
  const _nickname = ctx.request.body.nickname;
  if (_username && _userpwd && _nickname) {
    const user = {
      username: _username,
      userpwd: _userpwd,
      nickname: _nickname,
    };
    await userService
      .findUser(user.username)
      .then(async (res) => {
        if (res.length) {
          try {
            throw Error("用户名已存在");
          } catch (err) {
            console.log(err);
          }
          ctx.body = {
            code: "80003",
            data: "err",
            msg: "用户名已存在",
          };
        } else {
          await userService
            .insertUser([user.username, user.userpwd, user.nickname])
            .then((res) => {
              let r = "";
              if (res.affectedRows !== 0) {
                r = "ok";
                ctx.body = {
                  code: "80000",
                  data: r,
                  msg: "注册成功",
                };
              } else {
                r = "fail";
                ctx.body = {
                  code: "80004",
                  data: r,
                  msg: "注册成功",
                };
              }
            })
            .catch((err) => {
              // console.log(err);
              ctx.body = {
                code: "80002",
                data: err,
              };
            });
        }
      })
      .catch((err) => {
        ctx.body = {
          code: "80002",
          data: err,
        };
      });
  } else {
    ctx.body = {
      code: "80001",
      msg: "用户名、密码或昵称不能为空",
    };
  }
});

router.post("/userLogin", async (ctx, next) => {
  const _username = ctx.request.body.username;
  const _userpwd = ctx.request.body.userpwd;
  if (_username && _userpwd) {
    await userService.userLogin(_username, _userpwd).then((res) => {
      if (res.length !== 1) {
        try {
          throw Error("用户密码错误");
        } catch (err) {
          console.log(err);
        }
        ctx.body = {
          code: "80005",
          data: "err",
          msg: "账号密码错误",
        };
      } else {
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username,
        };
        ctx.body = {
          code: "80000",
          data: result,
          msg: "登录成功",
        };
      }
    });
  } else {
    ctx.body = {
      code: "80001",
      msg: "用户名、密码或昵称不能为空",
    };
  }
});

// 根据分类名查找路径列表
router.post("/findNoteListByType", async (ctx, next) => {
  const note_type = ctx.request.body.note_type;
  const userId = ctx.request.body.userId;
  await userService
    .findNoteListByType(note_type, userId)
    .then((res) => {
      let r = "";
      if (res.length) {
        r = "ok";
        ctx.body = {
          code: "80000",
          data: res,
          msg: "查找成功",
        };
      } else {
        r = "error";
        ctx.body = {
          code: "80004",
          data: r,
          msg: "查找失败",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80002",
        data: err,
      };
    });
});

router.post("/findNoteDetailById", async (ctx, next) => {
  const id = ctx.request.body.id;
  await userService
    .findNoteDetailById(id)
    .then((res) => {
      if (res.length) {
        ctx.body = {
          code: "80000",
          data: res,
          msg: "查找成功",
        };
      } else {
        r = "error";
        ctx.body = {
          code: "80004",
          data: r,
          msg: "查找失败",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80002",
        data: err,
      };
    });
});
module.exports = router;
