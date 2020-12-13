import { Component, OnInit } from '@angular/core';
import {Game} from '../model/game';
import { GameService } from '../shared/game.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listgames: Game[] = [];
  url = "assets/home/dummy/";
  i: any;
  l:any=4;
  hover:any;
  constructor(private g: GameService , private router: Router ,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.g.getGame().subscribe(
      (data:Game[])=>{this.listgames= data
      }, (err) => {
        console.log(err);
      }

    );
  }


  parenFunction(data)
  {
    this.l=data;
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
