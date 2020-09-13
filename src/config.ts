import { env } from "process";

export const config = {
    host: env.HOST,
    port: +env.PORT,
    cors: {
        origin: env.CORS,
    },
};
