import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Game} from '../model/game';
import {GameService} from '../shared/game.service';
import {Router} from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listgames: Game[] = [];
  url = "assets/home/dummy/";
  i: any;
  @Input() l;
  @Output() callParentFunction:EventEmitter<any>=new EventEmitter<any>();
  constructor(private g: GameService , private router: Router ,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.g.getGame().subscribe(
      (data:Game[])=>{this.listgames= data
      }, (err) => {
        console.log(err);
      }

    );
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
onClickAll()
{
  this.callParentFunction.emit(this.listgames.length);

}
}
