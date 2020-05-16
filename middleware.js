//  中间件
const Koa = require('koa');
const app = new Koa();

const middleware1 = function async(ctx, next) {
  console.log('this is a middleware');
  console.log(ctx.request.path);
  next()
};

const middleware2 = function async(ctx, next) {
  console.log('this is a middleware2');
  console.log(ctx.request.path);
  next()
};
const middleware3 = function async(ctx, next) {
  console.log('this is a middleware3');
  console.log(ctx.request.path);
  // next()
};
const middleware4 = function async(ctx, next) {
  console.log('this is a middleware4');
  console.log(ctx.request.path);
  next()
};
/**
中间件处理程序加了next()，执行之后会调用下一个中间的处理程序，
 以此类推，等执行到的中间件没有next()方法的时候。就请求终止
  next() 后面的方法行:倒着来一轮执行每个中间件next()方法后的方法
 **/
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.use(middleware4);

app.listen(3000);
