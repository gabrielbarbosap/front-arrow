import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavOpenMobileComponent } from './nav-open-mobile.component';

const routes: Routes = [
  {
    path: '',
    component: NavOpenMobileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavOpenRoutingModule {}
