// 业务配置
/**
 module.exports = function (ctx) {
  ctx.body = {
    "message" : "hello form b"
  }
};
 **/
// 另外一种写法(常用)
function a(ctx) {
  ctx.body = {
    "message" : "hello form b"
  }
}

module.exports = function (ctx) {
  a;
};
