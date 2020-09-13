import { Next } from 'koa';

import { Context, Middleware } from "./interface";

function respond(ctx: Context, status: number, payload: string | object) {
    ctx.status = status;
  
    if (payload !== undefined) {
      ctx.body = payload;
    }
}

export const responseMiddleware: Middleware = async (ctx: Context, next: Next): Promise<void> => {
    ctx.respondOk = respond.bind(ctx, ctx, 200);
    ctx.respondCreated = respond.bind(ctx, ctx, 201);
    ctx.respondNoContent = respond.bind(ctx, ctx, 204);
    ctx.respondBadRequest = respond.bind(ctx, ctx, 400);
    ctx.respondUnauthorized = respond.bind(ctx, ctx, 401);
    ctx.respondForbidden = respond.bind(ctx, ctx, 403);
    ctx.respondNotFound = respond.bind(ctx, ctx, 404);
  
    ctx.respondError = (msg: string) => {
      throw new Error(msg);
    };
  
    return next();
  };
  