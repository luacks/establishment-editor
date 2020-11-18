import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CityService } from './city.service';

describe('CityService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
