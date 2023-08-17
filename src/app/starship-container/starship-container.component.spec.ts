import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipContainerComponent } from './starship-container.component';

describe('StarshipContainerComponent', () => {
  let component: StarshipContainerComponent;
  let fixture: ComponentFixture<StarshipContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipContainerComponent]
    });
    fixture = TestBed.createComponent(StarshipContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
