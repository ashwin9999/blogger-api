import * as Router from '@koa/router';

import { KoaRouter } from '../../interface';

import { 
    getUserByIdController, 
    createUserController,
    deleteUserController,
    updateUserController,
} from './user.controller';

export const router: KoaRouter = (() => {
    const rtr: KoaRouter = new Router();
    
    rtr.post('/', createUserController);
    rtr.get('/:id', getUserByIdController);
    rtr.put('/:id', updateUserController);
    rtr.delete('/:id', deleteUserController);

    return rtr;
})();
