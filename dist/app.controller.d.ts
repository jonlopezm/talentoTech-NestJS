import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(name: string): string;
    sayGoodbye(name: string): string;
}
