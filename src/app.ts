import { config } from './config';
import { getKoaApp } from './get-koa-app';
import { KoaApp, KoaAppConfig } from './interface';
import { initializeRoutes } from './routes';

export const listen = (() => {
    const appConfig: KoaAppConfig = {
        host: config.host,
        port: config.port,
        proxy: true,
        json: false,
        jsonLimit: '1mb',
        compression: true,
        cors: true,
        corsOpts: {
            origin: config.cors.origin,
            allowMethods: 'GET, POST, PUT, DELETE',
            credentials: true,
        },
    };

    const app: KoaApp = getKoaApp(appConfig);

    initializeRoutes(app);

    return app.listen;
})();
