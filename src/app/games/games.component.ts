import { Component, OnInit } from '@angular/core';
import {Game} from '../model/game';
import {GameService} from '../shared/game.service';
import {Router} from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Location} from '@angular/common';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  listgames: Game[] = [];
  url = "assets/home/dummy/";
  i: any;
  constructor(private g: GameService,private router: Router ,private sanitizer: DomSanitizer, private location: Location) { }

  ngOnInit(): void {
    this.g.getGame().subscribe(
      (data:Game[])=>{this.listgames= data
      }, (err) => {
        console.log(err);
      }

    );
  }

  delete(id:number){
    console.log('delete');
    this.g.deleteGame(id).subscribe(resultat => {
        alert("game deleted succesfully!")
        this.router.navigateByUrl('/games');
        this.g.getGame().subscribe(
          (data:Game[])=>{this.listgames= data
          }, (err) => {
            console.log(err);
          }

        );
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
        this.url = event.target.result;
      }
    }
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.sanitizer.bypassSecurityTrustUrl( "assets/home/dummy/"+imageUrl.substring(12));
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.i = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }






}
