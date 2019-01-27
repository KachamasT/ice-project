import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
    let service: ConfigService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConfigService],
        }).compile();
        service = module.get<ConfigService>(ConfigService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return database username', () => {
        expect(service.mySQLUser).toBeDefined();
    });

    it('should return database password', () => {
        expect(service.mySQLPassword).toBeDefined();
    });

    it('should return database url', () => {
        expect(service.mySQLServer).toBeDefined();
    });

    it('should return database name', () => {
        expect(service.mySQLDatabaseName).toBeDefined();
    });
});
