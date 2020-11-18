import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { formatAPIData, IEstablishment } from '../../models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  api = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge';

  constructor(private http: HttpClient) { }

  hasLocalData(): boolean {
    const establishments = localStorage.getItem('establishments');
    return !!establishments;
  }

  private fetchAPI(): Observable<IEstablishment[]> {
    return this.http.get<IEstablishment[]>(this.api + '/establishments')
      .pipe(map(formatAPIData))
      .pipe(map(data => {
        localStorage.setItem('establishments', JSON.stringify(data));
        return data;
      }));
  }

  private fetchLocal(): Observable<IEstablishment[]> {
    return new Observable( subscriber => {
      const data = localStorage.getItem('establishments');
      const json = JSON.parse(data);
      subscriber.next(json);
      subscriber.complete();
    });
  }

  fetch(): Observable<IEstablishment[]> {
    const hasLocalData = this.hasLocalData();
    return hasLocalData ? this.fetchLocal() : this.fetchAPI();
  }

  getOneByIndex(index: number): Observable<IEstablishment> {
    return new Observable( subscriber => {
      this.fetch().subscribe( data => {
        subscriber.next(data.filter( establishment => {
          return establishment.index === index;
        } )[0]);
        subscriber.complete();
      }, error => subscriber.error(error));
    });
  }

  update(establishment: IEstablishment): Observable<boolean> {
    return new Observable( subscriber => {
      let establishments = [];

      try {
        establishments = JSON.parse(localStorage.getItem('establishments'));
      } catch (err) {
        subscriber.error(false);
      }

      const updatedEstablishments = establishments.map( storedEstablishment => {
        if ( storedEstablishment.index === establishment.index ) {
          return establishment;
        }

        return storedEstablishment;
      });

      localStorage.setItem('establishments', JSON.stringify(updatedEstablishments));
      subscriber.next(true);
      subscriber.complete();
    });
  }
}
