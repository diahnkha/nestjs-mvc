import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('index')
  root() {
    let dataUser = [
      {
        nama: "steve",
        kelas: "IT"
      },
      {
        nama: "rizqi",
        kelas: "IT"
      },
      {
        nama: "diah",
        kelas: "IT"
      },
      {
        nama: "khasanah",
        kelas: "IT"
      }
    ]
    return { message: 'Hello world!', dataUser };
  }
}
