import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviessearchService  {


  constructor(private http:HttpClient) { }

  getMovie(movie:any){
    return this.http.get(`https://www.omdbapi.com/?s=${movie}&apikey=249b7076`)
  }
}
