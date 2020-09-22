import { QueryResult } from 'pg';

import { getPGClient } from '../../storage';

import { User } from './user.interface';

const client = getPGClient();

export const getUserById = async (id: number): Promise<User> => {
    const res: QueryResult = await client.query(`
        SELECT
            id,
            name,
            email,
            "passwordHash",
            dob,
            timezone,
            likes,
            followers,
            "totalArticles",
            created,
            updated,
            deleted
        FROM user
        WHERE 
            id = $1
            AND deleted IS NULL
    `, [id]);

    return res.rows[0];
};

export const deleteUser = async (id: number): Promise<User> => {
    const res: QueryResult = await client.query(`
        UPDATE user
        SET deleted = NOW()
        WHERE id = $1
    `, [id]);

    return res.rows[0];
};

export const createUser = async (user: User): Promise<User> => {
    const {
        name,
        email,
        passwordHash,
        dob,
        timezone,
        likes,
        followers,
        totalArticles,
    } = user;
    
    const res: QueryResult = await client.query(`
        INSERT INTO USER 
            (name, email, "passwordHash", dob, timezone, likes, followers, "totalArticles")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `, [name, email, passwordHash, dob, timezone, likes, followers, totalArticles]);

    return res.rows[0];
}
