import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {FacilityComponent} from "./facility/facility.component";
import {ContractComponent} from "./contract/contract.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'facility', component: FacilityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'customer', component: CustomerComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];
export class AppRoutingModule { }
