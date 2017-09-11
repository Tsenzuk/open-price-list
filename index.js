const Koa = require('koa');
const koaStatic = require('koa-static');

const app = new Koa();

app.use(koaStatic('./public'));

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

process.env.IP = process.env.IP || '0.0.0.0';
process.env.PORT = process.env.PORT || '3000';
console.log(process.env.IP, ':', process.env.PORT);
app.listen(process.env.PORT, process.env.IP);
