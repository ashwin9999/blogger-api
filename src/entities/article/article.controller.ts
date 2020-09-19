import { Controller, Context } from '../../interface';
import { Article } from './article.interface';
import { deleteArticle, getArticleById, getArticles } from './article.service';

export const getArticlesController: Controller = async (ctx: Context) => {
    const result: Article[] = await getArticles();

    ctx.state = {
        result,
        error: false,
    }
    
    return ctx.respondOk(ctx.state);
};

export const getArticleByIdController: Controller = async (ctx: Context) => {
    const { id } = ctx.query;
    
    const result: Article = await getArticleById(id);

    ctx.state = {
        result,
        error: false,
    }
    
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

export const deleteArticleController: Controller = async (ctx: Context) => {
    const { id } = ctx.query;

    const result = await deleteArticle(id);

    ctx.state = {
        result,
        error: false,
    };
    
    return ctx.respondOk(ctx.state);
};
