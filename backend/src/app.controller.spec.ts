import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();
    });

    describe('root', () => {
        let appController: AppController;

        beforeAll(() => {
            appController = app.get<AppController>(AppController);
        });

        it('should return "pong"', () => {
            expect(appController.getPong()).toHaveProperty('msg', 'pong');
        });
    });
});
