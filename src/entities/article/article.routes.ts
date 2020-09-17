import * as Router from '@koa/router';

import { KoaRouter } from '../../interface';

import { 
    getArticleByIdController, 
    getArticlesController,
    createArticleController,
    updateArticleController,
    deleteArticleController,
} from './article.controller';

export const router: KoaRouter = (() => {
    const rtr: KoaRouter = new Router();

    rtr.post('/', createArticleController);
    rtr.get('/', getArticlesController);
    rtr.get('/:id', getArticleByIdController);
    rtr.put('/:id', updateArticleController);
    rtr.delete('/:id', deleteArticleController);

    return rtr;
})();
