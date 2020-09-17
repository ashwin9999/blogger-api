import { Controller, Context } from '../../interface';

// TODO: add a more complex user search

export const getUserByIdController: Controller = async (ctx: Context) => {
    // TODO: add service to get user by Id from database
    
    return ctx.respondOk(ctx.state);
};

export const createUserController: Controller = async (ctx: Context) => {
    // TODO: add service to create a user
    
    return ctx.respondOk(ctx.state);
};

// This will probably be a soft delete
export const deleteUserController: Controller = async (ctx: Context) => {
    // TODO: add service to delete a user
    
    return ctx.respondOk(ctx.state);
};

export const updateUserController: Controller = async (ctx: Context) => {
    // TODO: add service to update a user
    
    return ctx.respondOk(ctx.state);
};
