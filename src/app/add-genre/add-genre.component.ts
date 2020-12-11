import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { GenreService } from '../shared/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  g: Genre = new Genre();

  listgenres: Genre[] = [];

  constructor(private router:Router, private gs:GenreService,private genre_service: GenreService) { }

  ngOnInit(): void {

    this.gs.getGenres().subscribe(
      (data:Genre[])=>{this.listgenres= data
      }, (err) => {
        console.log(err);
      }
    );
  }

  save(){ this.genre_service.addGenre(this.g).subscribe(
    resultat => {
      console.log("genre added");
      this.router.navigateByUrl('/genres');
    }, (err) => {
      console.log(err);
    }
  )

  }




}
