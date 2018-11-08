import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListingComponent } from './hero-listing.component';

describe('HeroListingComponent', () => {
  let component: HeroListingComponent;
  let fixture: ComponentFixture<HeroListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
