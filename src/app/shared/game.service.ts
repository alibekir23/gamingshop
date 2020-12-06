import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../model/game';

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

}
