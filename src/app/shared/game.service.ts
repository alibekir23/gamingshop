import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../model/game';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  gameUrl = "http://localhost:3000/Game";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  addGame(g: Game): Observable<Game>
  {
    return this.http.post<Game>(this.gameUrl, g, this.httpOptions);
  }

  getGame(): Observable<Game[]>
  {
    return this.http.get<Game[]>(this.gameUrl);
  }


  getdonationFromId(id: number): Observable<any> {

    const url = `${this.gameUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      tap(selectedMovie => console.log(`selected movie = ${JSON.stringify(selectedMovie)}`)),
    catchError(error => of(new Game()))
  );
  }
  updateGame(movie: Game): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${this.gameUrl}/${movie.id}`, movie, httpOptions).pipe(
    tap(updatedMovie => console.log(`updated movie = ${JSON.stringify(updatedMovie)}`)),
    catchError(error => of(new Game()))
  );
  }

  deleteGame(g: Game |number):  Observable<Game>
  {
    const id = typeof g === 'number' ? g : g.id;
    const url = this.gameUrl + '/' + id;
    return this.http.delete<Game>(url);
  }

}
