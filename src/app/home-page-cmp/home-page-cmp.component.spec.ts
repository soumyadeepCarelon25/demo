import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCmpComponent } from './home-page-cmp.component';

describe('HomePageCmpComponent', () => {
  let component: HomePageCmpComponent;
  let fixture: ComponentFixture<HomePageCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageCmpComponent]
    });
    fixture = TestBed.createComponent(HomePageCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
