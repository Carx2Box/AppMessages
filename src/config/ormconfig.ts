import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export let DatabaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'naiara1301',
    database: 'sendmeapp_db',
    entities: ['src/**/*.entity{.ts,.js}'],
    synchronize: true,
};
