import { QueryResult } from 'pg';

import { getPGClient } from '../../storage';

import { Article } from './article.interface';

const client = getPGClient();

/**
 * Gets all the articles
 */
export const getArticles = async (): Promise<Article[]> => {
    const res: QueryResult = await client.query(`
        SELECT 
            id,
            title,
            author,
            link,
            likes,
            img,
            genre,
            body,
            created,
            updated,
            deleted
        FROM article
        WHERE deleted IS NULL
    `, []);

    return res.rows[0];
}


/**
 * Gets article by id
 */
export const getArticleById = async (id: number): Promise<Article> => {
    const res: QueryResult = await client.query(`
        SELECT 
            id,
            title,
            author,
            link,
            likes,
            img,
            genre,
            body,
            created,
            updated,
            deleted
        FROM article
        WHERE
            deleted IS NULL
            AND id = $1
    `, [id]);

    return res.rows[0];
}

/**
 * Creates an article
 */
export const createArticle = async (article: Article): Promise<Article> => {
    const {
        title,
        authorId,
        link,
        likes,
        img,
        genre,
        body
    } = article;

    const  res: QueryResult = await client.query(`
        INSERT INTO article
            (title, "authorId", link, likes, img, genre, body)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `, [title, authorId, link, likes, img, genre, body]);

    return res.rows[0];
}

/**
 * Does a soft delete so that the deleted items are recoverable
 */
export const deleteArticle = async (id: number): Promise<Article> => {
    const res: QueryResult = await client.query(`
        UPDATE article
        SET "deleted" = NOW()
        WHERE id = $1
    `, [id]);

    return res.rows[0];
}
