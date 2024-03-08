import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string): string {
    return 'Hello !'+ name;
  }

  sayGoodbye(name: string): string {
    return 'Goodbye!'+ name;
  }

}

