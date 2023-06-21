import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetguideComponent } from './petguide.component';

describe('PetguideComponent', () => {
  let component: PetguideComponent;
  let fixture: ComponentFixture<PetguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetguideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
