import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // api = 'http://localhost:3000/products/'
  pcURL ='http://192.168.1.5:3000/products/'
  constructor(private http:HttpClient) { }

  getProductDataByCategory(category: string,limit?:number,offset?:number): Observable<any> {
    return this.http.get<any>(`${this.pcURL}/${category}?limit=${limit}&offset=${offset}`);
  }
}
