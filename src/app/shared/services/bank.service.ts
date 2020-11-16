import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBank } from '../../models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  getBanks(): Observable<IBank[]> {
    return this.http.get<IBank[]>('/assets/data/banks.json')
      .pipe(map(data => data));
  }
}
