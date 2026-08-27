const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3033;

// 使用cors中间件
app.use(cors()); // 允许所有域
app.use(express.static(".")); // 设置静态文件目录为当前目录
// 自定义 MIME 类型（如果需要）
app.use((req, res, next) => {
    // console.log(req.url);
    res.setHeader("Content-Type", "text/css");5
    res.setHeader("Content-Type", "application/javascript");
    res.setHeader("Content-Type", "text/javascript");
    res.setHeader("Content-Type", "application/cconb+json");
    res.setHeader("Content-Type", "Access-Control-Allow-Origin");

    next();
});

// 配置静态文件目录，允许省略 .html 后缀
app.use(express.static("public", { extensions: ["html", "htm"] }));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
