import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./detail/detail.component";
import {PageComponent} from "./page/page.component";


const routes: Routes = [
  {path: '',component: PageComponent},
  {path: 'detail/:name/:title',component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
