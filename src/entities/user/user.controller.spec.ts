import { suite, test } from '@testdeck/mocha';

import { expect } from 'chai';

import 'mocha';

import * as sinon from 'sinon';

import { StandardResponseFormat } from '../../interface';
import { Context } from '../../interface';

import { updateUserController } from './user.controller';
import { User } from './user.interface';

import * as userService from './user.service';

@suite export class UserControllerTests {
    private createUser: sinon.SinonStub;
    private deleteUser: sinon.SinonStub;
    private getUserById: sinon.SinonStub;
    private updateUser: sinon.SinonStub;

    private readonly user: User = {
        id: 1,
        name: 'Test User',
        email: 'test@test.org',
        passwordHash: '4%28@7#1@3',
        dob: '1995-08-10',
        timezone: 'America/New_York',
        likes: 450,
        followers: 19,
        totalArticles: 52,
        created: '2020-08-20',
        updated: '2020-08-30',
        deleted: null,
    };

    before() {
        this.createUser = sinon.stub(userService, 'createUser').resolves(this.user);
        this.updateUser = sinon.stub(userService, 'updateUser').resolves(this.user);
        this.deleteUser = sinon.stub(userService, 'deleteUser').resolves(this.user);
        this.getUserById = sinon.stub(userService, 'getUserById').resolves(this.user);
    }

    after() {
        this.createUser.restore();
        this.updateUser.restore();
        this.deleteUser.restore();
        this.getUserById.restore();
    }

    @test async 'should update a user'() {
        const respondOk: sinon.SinonStub = sinon.stub();

        const id = this.user.id;

        const expected: StandardResponseFormat<User> = { result: this.user, error: false };

        const ctx: Context = <Context> <unknown> { respondOk };

        await updateUserController(ctx);

        expect(this.updateUser.called).to.be.true;
        expect(this.updateUser.calledWithExactly(id, this.user));

        expect(respondOk.called).to.be.true;
        expect(respondOk.calledWithExactly(expected));
    }
}