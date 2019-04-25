import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/song.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  @Input() song: Song[];
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
