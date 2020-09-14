import * as Koa from 'koa';

import * as cors from '@koa/cors';

import * as compress from 'koa-compress';

import { ContextAugmentations, KoaAppConfig, StandardResponseFormat } from "./interface";

import { responseMiddleware } from './middleware';

export const getKoaApp = (config: KoaAppConfig) => {
    const app = new Koa<StandardResponseFormat, ContextAugmentations>();

    if (config.cors) {
        app.use(cors(config.corsOpts));
    }

    if (config.compression) {
        app.use(compress());
    }

    app.use(responseMiddleware);

    app.listen = app.listen.bind(app, config.port, config.host, () => {
        console.log(`Listening on ${config.host}:${config.port}`);
    });

    return app;
}
