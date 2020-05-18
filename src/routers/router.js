// 合并router

const combineRouters = require('koa-combine-routers');
const aroutes = require('./aRouter');
const broutes = require('./');

module.exports = combineRouters(
  aroutes,
  broutes
);
