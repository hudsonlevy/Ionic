import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  // 550?api_key=0e38a177ea5d7a0991965061b8a56975
  
  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=0e38a177ea5d7a0991965061b8a56975");    
  }
}
