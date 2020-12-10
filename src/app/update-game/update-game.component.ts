import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../model/game';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../shared/game.service';
import {Location} from '@angular/common';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Genre} from '../model/Genre';
import {GenreService} from '../shared/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {
  @Input() game: Game;
  game_form: FormBuilder = new FormBuilder();
  game_group: FormGroup;
  listgenres: Genre[] = [];
  url = "C:/Users/ali/Desktop/4TWIN2/Application coté client/angular/gamingshop/src/assets/home/dummy";
  img_url = "../assets/home/dummy/";
  constructor(private router: Router,private route: ActivatedRoute, private service: GameService, private location: Location, private sanitizer: DomSanitizer,private gs : GenreService) {
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
    this.getMovieFromRoute();
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

  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.service.getdonationFromId(id).subscribe(game => this.game = game);

  }

  save(): void {
    this.service.updateGame(this.game).subscribe(resultat => {
        alert("game updated succesfully!")
        this.router.navigateByUrl('/games');
      },
      (err) => {
        alert("error!")
        console.log(err);
      });

  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.sanitizer.bypassSecurityTrustUrl( "assets/home/dummy/"+imageUrl.substring(12));
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
