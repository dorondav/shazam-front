import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { AppComponent } from './app.component';
import { SongsComponent } from './song-list/songs/songs.component';
import { SongListComponent } from './song-list/song-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Services
import { GetSongsService } from './services/get-songs.service';
import { LoaderInterceptor } from './shared/loader.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongListComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    GetSongsService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
