export default class IUrl {
    urlId: string;
    longUrl: string;
    shortUrl: string;
    // TODO: Might implement user ownership later...
    userUUID: string;

    constructor(urlId: string, longUrl: string,
        shortUrl: string, userUUID: string) {
        this.urlId = urlId;
        this.longUrl = longUrl;
        this.shortUrl = shortUrl;
        this.userUUID = userUUID;
    }
}