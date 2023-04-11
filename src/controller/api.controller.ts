import { Inject, Controller, Get, Post } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { PhotoService } from '../service/photo.service';
import { WeatherService } from '../service/weather.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  PhotoService: PhotoService;

  @Inject()
  WeatherService: WeatherService

  @Post('/create')
  async create() {
    const data = this.ctx.request.body
    const user = await this.PhotoService.savePhoto(data)
    return { success: true, message: 'The create success', data: user }
    // console.log("data", data)
  }

  @Get('/all')
  async findList() {
    const dataList = await this.PhotoService.find()
    // console.log("dataList",dataList)
    return { success: true, code: 0 , message: 'ok', data: dataList }
  }

  @Post('/update')
  async update() {
    let methods = this.ctx.request.body
    let data = await this.PhotoService.update(methods)
    return { success: true, message: 'ok', data: data }
  }

  @Get('/weather')
  async demoApi() {
    await this.WeatherService.invoke()
  }
}
