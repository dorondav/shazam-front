export class Song {
    songTitle: string;
    coverImage: string;
    songSubtitle: string;
    shazamUrl: string;

    constructor(songTitle: string, coverImage: string, songSubtitle: string, shazamUrl: string) {
        this.songTitle = songTitle;
        this.songSubtitle = songSubtitle;
        this.coverImage = coverImage;
        this.shazamUrl = shazamUrl;
    }
}
