export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
    sources: SourseResponse[];
}

export interface Article {
    source: Sourse;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

type Sourse = {
    id: string;
    name: string;
};

export interface SourseResponse {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISources {
    status: string;
    sources: SourseResponse[];
}

export interface Options {
    sources?: string;
    apiKey?: string;
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export type CallbackFunction = (data: NewsResponse) => void;