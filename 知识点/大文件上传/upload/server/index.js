/*
 * @Author: LHN
 * @Date: 2020-10-26 11:48:46
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-26 13:19:01
 * @description: In User Settings Edit
 * @FilePath: \upload\server\index.js
 */
const http = require("http");
const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");

const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname,"./target"); // 存储地址

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-allow-Origin", "*");
  res.setHeader("Access-Control-allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }
  const multipart = new multiparty.Form();
  multipart.parse(req, async (err, fields) => {
    console.log(fields);
    if (err) return;
    const [chunk] = fields.chunk;
    const [hash] = fields.hash;
    const [filename] = fields.filename;
    const chunkDir = path.resolve(UPLOAD_DIR, filename);

    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir);
    }

    await fse.move(chunk.path, `${chunkDir}/${hash}`);
    res.end("ok");
  });
});

server.listen(3000, () => {
  console.log("listen in port 3000");
});
