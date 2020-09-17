import { Controller, Context } from '../../interface';

export const getArticlesController: Controller = async (ctx: Context) => {
    // TODO: add service to get articles from database
    
    return ctx.respondOk(ctx.state);
};

export const getArticleByIdController: Controller = async (ctx: Context) => {
    // TODO: add service to get article by id
    
    return ctx.respondOk(ctx.state);
};

export const createArticleController: Controller = async (ctx: Context) => {
    // TODO: add service to create articles
    
    return ctx.respondOk(ctx.state);
};

export const updateArticleController: Controller = async (ctx: Context) => {
    // TODO: add service to update article
    
    return ctx.respondOk(ctx.state);
};

// This will probably be a soft delete
export const deleteArticleController: Controller = async (ctx: Context) => {
    // TODO: add service to delete article
    
    return ctx.respondOk(ctx.state);
};
