import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMetadataComponent } from './search-metadata.component';

const routes: Routes = [
  {
    path: '',
    component: SearchMetadataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMetaDataRoutingModule {}
