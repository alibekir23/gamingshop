import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Game} from '../model/game';
import {Genre} from '../model/Genre';
import { GenreService } from '../shared/genre.service';
import { GameService } from '../shared/game.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  game_form: FormBuilder = new FormBuilder();
  game_group: FormGroup;
  game: Game = new Game();
  listgenres: Genre[] = [];
  url = "C:/Users/ali/Desktop/4TWIN2/Application coté client/angular/gamingshop/src/assets/home/dummy";
  img_url = "../assets/home/dummy/";

  constructor(private Gs: GameService, private location: Location,private router: Router , private gs : GenreService) {
    this.game_group = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.minLength(10)),
      price: new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]*")]),
      genre_id: new FormControl('', Validators.required),
      cover: new FormControl('', Validators.required),
      video: new FormControl('', Validators.required),
    });


  }

  ngOnInit(): void {

    this.gs.getGenres().subscribe(
      (data:Genre[])=>{this.listgenres= data
      }, (err) => {
        console.log(err);
      }
    );
  }

  get id() { return this.game_group.get('id'); }
  get title() { return this.game_group.get('title'); }
  get description() { return this.game_group.get('description'); }
  get cover() { return this.game_group.get('cover'); }
  get video() { return this.game_group.get('video'); }
  get price() { return this.game_group.get('price'); }
  get genre_id() { return this.game_group.get('genre_id'); }


  add_game() {

      this.Gs.addGame(this.game).subscribe(resultat => {
          alert("game added succesfully!")
          this.router.navigateByUrl('/games');
        },
        (err) => {
          alert("error!")
          console.log(err);
        });



  }

  onSelectFile(e)
  {
    if (e.target.files)
    {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event: any)=> {
        this.img_url = event.target.result;
      }
    }
  }


}
