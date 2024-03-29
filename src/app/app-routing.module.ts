import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GamesComponent} from './games/games.component';
import {Game} from './model/game';
import {AddGameComponent} from './add-game/add-game.component';
import {AddGenreComponent} from './add-genre/add-genre.component';
import {GenresComponent} from './genres/genres.component';
import {GameDetailComponent} from './game-detail/game-detail.component';
import {UpdateGameComponent} from './update-game/update-game.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {path:''+'', component:HomeComponent},
  {path:'Newgame', component:AddGameComponent},
  {path:'Newgenre', component:AddGenreComponent},
  {path:'detail/:id', component:GameDetailComponent},
  {path:'games', component:GamesComponent},
  {path:'genres', component:GenresComponent},
  {path:'update-game/:id', component:UpdateGameComponent},
  {path:'login', component:UserProfileComponent},
  {path:'ListGames', component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
