import { suite, test } from '@testdeck/mocha';

import { expect } from 'chai';

import 'mocha';

import * as sinon from 'sinon';

import { StandardResponseFormat } from '../../interface';
import { Context } from '../../interface';

import { updateArticleController } from './article.controller';
import { Article } from './article.interface';

import * as articleService from './article.service';

@suite export class ArticleControllerTests {
    private updateArticle: sinon.SinonStub;

    private readonly article: Article = {
        id: 1,
        title: 'Test Article',
        authorId: 1,
        link: '/articles/889c4fa1-44d1-4ecd-89a6-47d7fa512bb5',
        likes: 67,
        img: '/889c4fa1-44d1-4ecd-89a6-47d7fa512bb5.png',
        genre: 1,
        body: '',
        created: '2020-08-20',
        updated: '2020-08-30',
        deleted: null,
    };

    before() {
        this.updateArticle = sinon.stub(articleService, 'updateArticle').resolves(this.article);
    }

    after() {
        this.updateArticle.restore();
    }

    @test async 'should update an article'() {
        const respondOk: sinon.SinonStub = sinon.stub();

        const id = this.article.id;

        const expected: StandardResponseFormat<Article> = { result: this.article, error: false };

        const ctx: Context = <Context> <unknown> { respondOk };

        await updateArticleController(ctx);

        expect(this.updateArticle.called).to.be.true;
        expect(this.updateArticle.calledWithExactly(id, this.article));

        expect(respondOk.called).to.be.true;
        expect(respondOk.calledWithExactly(expected));
    }
}
