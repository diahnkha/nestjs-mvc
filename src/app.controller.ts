import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/latihan-pertama')
  @Render('index1')
  root1() {
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

  @Get('/latihan')
  @Render('index')
  root() {
    return;
  }


  @Get()
  @Render('index2')
  root2() {
    let customers = [
      {
        id: 0,
        nama: "Michael Owen",
        description: "lorem ipsumkshgajhabfcsjj",
        job: "Model",
        photo: "https://images.unsplash.com/photo-1670321050210-cc80d26a3e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        id: 0,
        nama: "Diah Owen",
        description: "lorem ipsumkshgajhabfcsjj",
        job: "Model",
        photo: "https://images.unsplash.com/photo-1670321050210-cc80d26a3e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        id: 0,
        nama: "Nur Owen",
        description: "lorem ipsumkshgajhabfcsjj",
        job: "Model",
        photo: "https://images.unsplash.com/photo-1670321050210-cc80d26a3e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        id: 0,
        nama: "Khasanah Owen",
        description: "lorem ipsumkshgajhabfcsjj",
        job: "Model",
        photo: "https://images.unsplash.com/photo-1670321050210-cc80d26a3e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }

    ]
    return { message: 'Hello world!', customers };
  }


}
