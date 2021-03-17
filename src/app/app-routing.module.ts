import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: 'repository', component: SearchPageComponent},
  {path: 'about', component: AboutPageComponent },
  {path: '', redirectTo: '/repository', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
