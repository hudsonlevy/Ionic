import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  // 550?api_key=0e38a177ea5d7a0991965061b8a56975
  
  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` +" 0e38a177ea5d7a0991965061b8a56975");
  }

  getMovieDetails(filmeid) {
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + "0e38a177ea5d7a0991965061b8a56975");    
  }
}
