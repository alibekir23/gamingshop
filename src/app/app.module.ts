import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSrcModule } from 'ng-src';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenresComponent } from './genres/genres.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { UpdateGameComponent } from './update-game/update-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    AddGameComponent,
    AddGenreComponent,
    GenresComponent,
    GameDetailComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,
    UpdateGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSrcModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
