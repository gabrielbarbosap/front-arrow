import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOpenMobileComponent } from './nav-open-mobile.component';

describe('NavOpenMobileComponent', () => {
  let component: NavOpenMobileComponent;
  let fixture: ComponentFixture<NavOpenMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavOpenMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOpenMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
