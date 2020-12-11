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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ListComponent } from './list/list.component';


const config = {
  apiKey: "AIzaSyBCN2CN9oOhvugP9lnLIqd5bDRB28Uwb48",
  authDomain: "login-40a8c.firebaseapp.com",
  projectId: "login-40a8c",
  storageBucket: "login-40a8c.appspot.com",
  messagingSenderId: "608405672081",
  appId: "1:608405672081:web:03dda0fc4d6ec84802ef30",
  measurementId: "G-8N61T1H890"
};

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
    UpdateGameComponent,
    UserProfileComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSrcModule,
    Ng2SearchPipeModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
