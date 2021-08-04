import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAllComponent } from './table-all.component';

describe('TablePreviewComponent', () => {
  let component: TableAllComponent;
  let fixture: ComponentFixture<TableAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
