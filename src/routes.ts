import * as Router from '@koa/router';

import { KoaApp, KoaRouter } from './interface';

import { router as userRouter } from './entities/user/user.routes';
import { router as articleRouter } from './entities/article/article.routes';

export const router: KoaRouter = (() => {
    const rtr: KoaRouter = new Router();

    rtr.use('/user', userRouter.routes(), userRouter.allowedMethods());
    rtr.use('/article', articleRouter.routes(), articleRouter.allowedMethods());

    return rtr;
})();

export const initializeRoutes = (app: KoaApp) => {
    app.use(router.routes());
    app.use(router.allowedMethods());
};
