import * as bcrypt from 'bcrypt';
import { config } from '../../config';

import { Controller, Context } from '../../interface';
import { User } from './user.interface';
import { createUser, deleteUser, getUserById, updateUser } from './user.service';

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
    const { user } = ctx.body;

    const saltRounds = config.saltRounds;

    // TODO: need to design a safer pattern for password encryption
    
    const passwordHash = await bcrypt.hash(user.passwordHash, saltRounds);

    const sanitizedUser = { ...user };

    sanitizedUser.passwordHash = passwordHash;
    
    const result = await createUser(sanitizedUser);

    ctx.state = {
        result,
        error: false,
    }

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
    const { id } = ctx.query;

    const { newUser } = ctx.body;

    const result = await updateUser(id, newUser);

    ctx.state = {
        result,
        error: false,
    };
    
    return ctx.respondOk(ctx.state);
};
