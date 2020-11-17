import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentHeaderComponent } from './establishment-header.component';

describe('EstablishmentHeaderComponent', () => {
  let component: EstablishmentHeaderComponent;
  let fixture: ComponentFixture<EstablishmentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
