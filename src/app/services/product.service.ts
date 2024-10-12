import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'http://localhost:3000/products/'
  constructor(private http:HttpClient) { }

  getProductDataByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.api}/${category}`);
  }
}
