export interface UrlKey {
    id: string;
}

export interface IShortUrl extends UrlKey {
    shortUrl: string;
    longUrl: string;
    createAt: string;
    user: string;
}
