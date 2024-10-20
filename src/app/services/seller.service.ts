import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json' // Set the content type to JSON
});

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  api = 'http://localhost:3000'
  // pcURL ='http://192.168.1.5:3000/products/'


  constructor(private http:HttpClient) { }

  addProductData(data:any): Observable<any> {
    return this.http.post<any>(`${this.api}/seller/products`,data,{headers});
  }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file); // Append the file to FormData
    console.log(formData)
    return this.http.post<any>(`${this.api}/seller/upload`, formData);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.api}/seller/deleteProducts/${productId}`);
  }

  getAllProduct(): Observable<any> {
    return this.http.get(`${this.api}/seller/products`);
  }

}
