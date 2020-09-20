import { Controller, Context } from '../../interface';
import { User } from './user.interface';
import { deleteUser, getUserById } from './user.service';

// TODO: add a more complex user search

export const getUserByIdController: Controller = async (ctx: Context) => {
    const { id } = ctx.query;
    
    const result: User = await getUserById(id);

    ctx.state = {
        result,
        error: false,
    }
    
    return ctx.respondOk(ctx.state);
};

export const createUserController: Controller = async (ctx: Context) => {
    // TODO: add service to create a user
    
    return ctx.respondOk(ctx.state);
};

// This will probably be a soft delete
export const deleteUserController: Controller = async (ctx: Context) => {
    const { id } = ctx.query;

    const result = await deleteUser(id);

    ctx.state = {
        result,
        error: false,
    };
    
    return ctx.respondOk(ctx.state);
};

export const updateUserController: Controller = async (ctx: Context) => {
    // TODO: add service to update a user
    
    return ctx.respondOk(ctx.state);
};
