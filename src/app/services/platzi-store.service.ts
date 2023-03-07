import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/platzi.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlatziStoreService {

  public URL: string = 'https://api.escuelajs.co/api/v1';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const params = new HttpParams({
      fromObject: {
        limit: '10',
        offset: '0',
      }
    });

    return this.http.get<Product[]>(`${this.URL}/products`, { params });
  }

}
