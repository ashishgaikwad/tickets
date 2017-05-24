import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubsearchService {

  constructor(public http:Http) { }

  searchByUsername(query:string): Observable<Response> {
    return this.http.get(`https://api.github.com/users/${query}`);
  } 

}
