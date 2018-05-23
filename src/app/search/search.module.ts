import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubsearchService } from './github-search/githubsearch.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [SearchComponent, GithubSearchComponent],
  providers:[GithubsearchService]
})
export class SearchModule { }
