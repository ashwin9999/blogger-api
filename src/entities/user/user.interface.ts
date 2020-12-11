/**
 * Interface of a user during creation
 */
export interface UserCreate {
    name: string;
    email: string;
    passwordHash: string;
    dob: string;
    timezone: string;
    likes: number;
    followers: number;
    totalArticles: number;
    created: string;
    updated: string;
    deleted: string;
}

/**
 * Type of a user during update
 */
export type UserUpdate = UserCreate;

/**
 * Interface of a user
 */
export interface User extends UserCreate {
    id: number;
}
