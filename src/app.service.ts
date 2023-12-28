import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Get Hello World!';
  }

  postHello():string{
    return 'Post Hello World!';
  }

  patchHello():string{
    return 'patch Hello World!';
  }

  putHello():string{
    return 'put Hello World!';
  }

  deleteHello():string{
    return 'delete Hello World!';
  }
}
