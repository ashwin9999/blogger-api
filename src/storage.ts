import { Client } from 'pg';

import { config } from './config';

export const getPGClient = () => {
    return new Client({
        host: config.db.host,
        port: config.db.port,
        password: config.db.password,
        user: config.db.user,
        database: config.db.database,
    });
};
