import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianHeroesComponent } from './indian-heroes.component';

describe('IndianHeroesComponent', () => {
  let component: IndianHeroesComponent;
  let fixture: ComponentFixture<IndianHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
