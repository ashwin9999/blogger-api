import * as Koa from 'koa';

import { Middleware as KoaMiddleware } from 'koa';

import * as Router from '@koa/router';

import { Options as KoaCorsOptions } from '@koa/cors';

export interface KoaAppConfig {
    host: string;
    port: number;
    proxy?: boolean;
    json: boolean;
    jsonLimit?: string;
    compression?: boolean;
    cors?: boolean;
    corsOpts?: KoaCorsOptions;
}

export interface StandardResponseFormat<T = any> {
    error: boolean;
    result: T;
}

export type ResponseFunction = (payload: string | object) => void;

export interface ContextResponseMethods {
    respondOk: ResponseFunction;
    respondCreated: ResponseFunction;
    respondNoContent: ResponseFunction;
    respondBadRequest: ResponseFunction;
    respondUnauthorized: ResponseFunction;
    respondForbidden: ResponseFunction;
    respondNotFound: ResponseFunction;
    respondError: ResponseFunction;
}

export type Context<Response = {}, Augmentations = {}> = Router.RouterContext<StandardResponseFormat<Response>, ContextAugmentations<Augmentations>>;

export type Controller = (ctx: Context) => Promise<void> | void;

export type Middleware = KoaMiddleware<StandardResponseFormat, ContextAugmentations>;

export type ContextAugmentations<T = {}> = &
  T &
  ContextResponseMethods;

export type KoaApp = Koa<StandardResponseFormat, ContextAugmentations>;

export type KoaRouter = Router;
