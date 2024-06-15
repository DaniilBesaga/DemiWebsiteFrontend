export interface IWorkItem {
    id: number;
    name: string;
    releaseDate: Date;
    imgUrl: string;
    trailerUrl: string;
    story: string;
}

export interface NewsItem {
    id: number;
    name: string; 
    postDate?: Date;
    imgUrl?: string; 
    description?: string; 
}

export interface IWorkItemPreview {
    id: number;
    name: string;
    releaseDate?: Date;
    imgUrl: string;
}