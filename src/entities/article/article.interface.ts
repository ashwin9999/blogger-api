import { Genre } from "../../constants/genre.enum";

/**
 * Article interface
 */
export interface Article {
    id: number;
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

// TODO: add CREATE and UPDATE interfaces for article
