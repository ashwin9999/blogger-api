import * as Router from '@koa/router';

import { KoaApp, KoaRouter } from './interface';

import { router as articleRouter } from './entities/article/article.routes';

export const router: KoaRouter = (() => {
    const rtr: KoaRouter = new Router();

    rtr.use('/article', articleRouter.routes(), articleRouter.allowedMethods());

    return rtr;
})();

export const initializeRoutes = (app: KoaApp) => {
    app.use(router.routes());
    app.use(router.allowedMethods());
};
