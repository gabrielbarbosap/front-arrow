import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavOpenModule } from '../../layout-base/nav-open-mobile/nav-open.module';
import { SearchMetaDataRoutingModule } from './search-metadata-routing.module';
import { SearchMetadataComponent } from './search-metadata.component';

@NgModule({
  declarations: [SearchMetadataComponent],
  imports: [CommonModule, SearchMetaDataRoutingModule, SharedModule, NavOpenModule],
  exports: [SearchMetadataComponent],
  entryComponents: [],
})
export class SearchMetaDataModule {}
