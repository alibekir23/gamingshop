import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { GenreService } from '../shared/genre.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  listgenres: Genre[] = [];

  i: any;
  constructor(private g: GenreService,private router: Router ,private location: Location) { }

  ngOnInit(): void {
    this.g.getGenres().subscribe(
      (data:Genre[])=>{this.listgenres= data
      }, (err) => {
        console.log(err);
      }

    );
  }

  delete(id:number){
    console.log('delete');
    this.g.deleteGenre(id).subscribe(resultat => {
        alert("genre deleted succesfully!")
        this.router.navigateByUrl('/genres');
        this.g.getGenres().subscribe(
          (data:Genre[])=>{this.listgenres= data
          }, (err) => {
            console.log(err);
            alert("error!")
          }

        );
      },
      (err) => {
        alert("error!")
        console.log(err);
      });

  }
}
