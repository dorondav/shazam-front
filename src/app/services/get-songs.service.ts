import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../song.model';
import { APIResInterface } from '../shared/APIResInterface';
@Injectable({
  providedIn: 'root'
})
export class GetSongsService {
  song: Song[] = [];
  APIResInterface: APIResInterface;
  constructor(private http: HttpClient) {
  }

  public getAllSongs() {
    // GET all songs from API
    this.http.get<APIResInterface>('http://localhost:3000/songslist')
      .subscribe(data => {
        for (let i = 0; i < 100; i++) {
          // GET params from data Array
          const songTitle: string = data.chart[i].heading.title;
          const songSubtitle: string = data.chart[i].heading.subtitle;
          const shazamUrl: string = data.chart[i].url;
          const coverImage: string = data.chart[i].images.default;
          //  push params to song Array
          this.song.push(<Song>{ songTitle, songSubtitle, shazamUrl, coverImage });
        }
        console.log(this.song);
      });
  }

  /**
  * @Return all songs Array to copmponent.
  */
  public showAllSongsArray() {
    return this.song;
  }
}
