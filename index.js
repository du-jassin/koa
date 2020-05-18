const Koa = require('koa');
const app = new Koa();

const router = require('./routers/router');

app.use(router());
app.listen(3000);
