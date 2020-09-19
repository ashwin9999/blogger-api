import { env } from "process";

export const config = {
    host: env.HOST,
    port: +env.PORT,
    cors: {
        origin: env.CORS,
    },
    db: {
        host: env.PGHOST,
        port: +env.PGPORT,
        user: env.PGUSER,
        password: env.PGPASSWORD,
        database: env.PGDATABASE,
    },
};
