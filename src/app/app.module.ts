import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SongsComponent } from './song-list/songs/songs.component';
import { SongListComponent } from './song-list/song-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Services
import { GetSongsService } from './services/get-songs.service';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetSongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
