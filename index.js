const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const koaBody = require('koa-body');

const router = new Router();

router.prefix('/api');
router.get('/',ctx => {
  ctx.body = 'hello world'
});
router.get('/api',ctx => {
  ctx.body = 'hello api'
});

async function check(ctx, next) {
  let header = ctx.request.headers;
  if (typeof header.role !== "undefined" && header.role == 'admin') {
    await next();
  }else {
    //过期
    ctx.body = {
      status: 401,
      message:'unauthorized post'
    };
  }
}

router.post('/user', async (ctx) => {
  let {body} = ctx.request;
  let header = ctx.request.header
  console.log(ctx.request.header.role);
  // console.log(body);
  // console.log(typeof body.email);
  if (typeof body.name !== "undefined" && typeof body.email !== "undefined") {
    ctx.body = {
      status: 200,
      data:body,
      msg:'上传成功'
    };
  }
  else {
    ctx.body = {
      status: 404,
      message:'name与email不能为空'
    };
  }
});
app.use(check);
app.use(koaBody());
app.use(router.routes())   // 将上面定义的router方法添加到app
  .use(router.allowedMethods());
app.listen(3000);
