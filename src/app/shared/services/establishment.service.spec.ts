import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EstablishmentService } from './establishment.service';

describe('EstablishmentService', () => {
  let service: EstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    service = TestBed.inject(EstablishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
