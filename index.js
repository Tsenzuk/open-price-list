const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')('./public'));

app.use(async ctx => {
  ctx.body = 'Hello World';
});
console.log(process.env.IP, ':', process.env.PORT);
app.listen(process.env.PORT, process.env.IP);