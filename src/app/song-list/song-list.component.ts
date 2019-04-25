import { Component, OnInit } from '@angular/core';
import { GetSongsService } from '../services/get-songs.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songArray: Song[] = [];
  constructor(private getSongsService: GetSongsService) {

  }

  ngOnInit() {
    // initialize data from the service
    this.getSongsService.getAllSongs();
    // Store Service Song Array is duplicate song Array
    this.songArray = this.getSongsService.showAllSongsArray();
    console.log(this.songArray);
  }
}
