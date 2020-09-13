import * as Router from '@koa/router';

import { KoaRouter } from '../../interface';

import { getArticleByIdController, getArticlesController } from './article.controller';

export const router: KoaRouter = (() => {
    const rtr: KoaRouter = new Router();

    rtr.get('/', getArticlesController);
    rtr.get('/:id', getArticleByIdController);

    return rtr;
})();
