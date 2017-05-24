import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from './githubsearch.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  username:string;
  profileInfo:JSON;
  buttonLabel:string = "Search";
  buttonColor:string = "primary";


  constructor(public githubSearchService:GithubsearchService) { }

  updateUsername(event):void {
    console.log('event:: ', event);
    this.username = event.target.value;
    this.buttonColor = "accent";
  }

  getProfileInfo():void {
    console.log(`username: ${this.username}`);
    this.githubSearchService.searchByUsername(this.username)
    .subscribe(
      res => this.profileInfo = res.json(),
      err => console.log('Error fetching data: ', err)
    )   
  }

  ngOnInit() {
  }

}
