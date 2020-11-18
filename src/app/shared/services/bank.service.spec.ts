import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BankService } from './bank.service';

describe('BankService', () => {
  let service: BankService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    service = TestBed.inject(BankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
