import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1680226981165_4055',
  koa: {
    port: 7001,
  },
  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'ljt123456', // 数据库密码
    database: 'user', // 数据表
    synchronize: true,
    logging: false
  },
  jwt: {
    secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')
    expiresIn: '2d', 
  },
  view: {
    mapping: {
      '.ejs': 'ejs',
    },
  },
  // ejs config
  ejs: {}
} as MidwayConfig;
