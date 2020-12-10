import { Genre } from "../../constants/genre.enum";

/**
 * Article interface during creation
 */
export interface ArticleCreate {
    title: string;
    authorId: number;
    link: string;
    likes: number;
    img?: string;
    genre?: Genre;
    body: string;
    created: string;
    updated: string;
    deleted: string;
}

/**
 * Article interface during update
 */
export type ArticleUpdate = ArticleCreate;

/**
 * Article interface
 */
export interface Article extends ArticleCreate {
    id: number;
}
