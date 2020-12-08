import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GamesComponent} from './games/games.component';
import {Game} from './model/game';
import {AddGameComponent} from './add-game/add-game.component';
import {AddGenreComponent} from './add-genre/add-genre.component';
import {GenresComponent} from './genres/genres.component';
import {GameDetailComponent} from './game-detail/game-detail.component';

const routes: Routes = [
  {path:'' + '', component:HomeComponent},
  {path:'game', component:GenresComponent},
  {path:'detail/:id', component:GameDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
