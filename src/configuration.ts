import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as orm from '@midwayjs/orm';
import * as  jwt from '@midwayjs/jwt'
import * as axios from '@midwayjs/axios';
import * as view from '@midwayjs/view-ejs';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { getConnection } from 'typeorm';
// import send from './utils/index'
// let schedule  = require('node-schedule') 


@Configuration({
  imports: [
    koa,
    orm,
    jwt,
    axios,
    view,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}

@Configuration()
export class AutoConfiguration {
  async onReady() {
    const conn = getConnection('default');
    if (conn.isConnected) {
      console.log('db is connected!')
    //   await schedule.scheduleJob('10 * * * * *',() => {
        // send.send()
    //     console.log('1111111')
    //  })
    } else {
      console.log('db is no connect!')
    }
    // console.log("sss",);
  }
}