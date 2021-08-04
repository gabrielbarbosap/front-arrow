import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavOpenMobileComponent } from './nav-open-mobile.component';
import { NavOpenRoutingModule } from './nav-open-routing.module'
@NgModule({
  declarations: [NavOpenMobileComponent],
  imports: [CommonModule, NavOpenRoutingModule, SharedModule],
  exports: [NavOpenMobileComponent],
  entryComponents: [],
})
export class NavOpenModule {}
