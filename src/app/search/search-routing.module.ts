import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { GithubSearchComponent } from './github-search/github-search.component';

const routes: Routes = [
  {path:'', component: SearchComponent,
  children:[
    {path:'github', component:GithubSearchComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
