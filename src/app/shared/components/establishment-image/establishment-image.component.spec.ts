import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentImageComponent } from './establishment-image.component';

describe('EstablishmentImageComponent', () => {
  let component: EstablishmentImageComponent;
  let fixture: ComponentFixture<EstablishmentImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
