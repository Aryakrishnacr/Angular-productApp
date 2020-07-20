import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
Baseurl = "http://localhost:3000/api/"
  constructor(private http:HttpClient) { }
  getProducts():Observable<any> {
    return this.http.get(this.Baseurl + "products");
  }
  newProduct(item):Observable<any> {
    return this.http.post(this.Baseurl + "products/insert",item)
  }
  updateProduct(id,item):Observable<any> {
    return this.http.put(this.Baseurl + "products/update/"+id,item)
  }
  deleteProduct(id):Observable<any> {
    return this.http.delete(this.Baseurl + "products/delete/"+id)
  }
}
