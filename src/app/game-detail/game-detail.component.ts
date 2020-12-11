import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../shared/game.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {Game} from '../model/game';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;
  @Output() callParentFunction:EventEmitter<any>=new EventEmitter<any>()
  constructor(private route: ActivatedRoute, private service: GameService, private location: Location, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getMovieFromRoute();
  }

  goBack(): void {
    this.location.back();
  }
  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.service.getdonationFromId(id).subscribe(game => this.game = game);

  }

  save(): void {
    this.service.updateGame(this.game).subscribe(() => this.goBack());
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.sanitizer.bypassSecurityTrustUrl( "assets/home/dummy/"+imageUrl.substring(12));
  }

  onClickCart()
  {
    this.callParentFunction.emit("test");
  }


}
