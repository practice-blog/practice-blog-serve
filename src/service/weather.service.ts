import { HttpService } from '@midwayjs/axios';
import { Provide } from '@midwayjs/core';
import { Inject } from '@midwayjs/core';

@Provide()
export class WeatherService {

  @Inject()
  httpService: HttpService;

  async invoke() {
    const url = 'https://api.vvhan.com/api/weather?city=济南市';
    const result = await this.httpService.get(url);
    console.log("res",result.data)
    // TODO result
  }
}