import { Controller, Context } from '../../interface';

export const getArticlesController: Controller = async (ctx: Context) => {
    // TODO: add service to get articles from database
    
    return ctx.respondOk(ctx.state);
};

export const getArticleByIdController: Controller = async (ctx: Context) => {
    // TODO: add service to get article by id
    
    return ctx.respondOk(ctx.state);
};
