import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMetadataComponent } from './search-metadata.component';

describe('SearchMetadataComponent', () => {
  let component: SearchMetadataComponent;
  let fixture: ComponentFixture<SearchMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
