import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ProductSupplier } from '../interfaces/productSupplier';

@Injectable({
  providedIn: 'root'
})
export class ProductSupplierService {

  private productSupplierUrl: string = 'http://localhost:8080/api/productSuppliers'
  httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}
  constructor(private http: HttpClient) { }

  private log(message: string): string{
    return `ProductSupplier service: ${message}`;
  }

  private handleError<T>(operation: string, result?: T){
    return(error: any): Observable<T> =>{
      console.error(error);
      console.log(this.log(`${operation} fail: ${error.message}`));
      return of (result as T);
    }
  }

  getProductSupplier(): Observable<ProductSupplier[]>{
    return this.http.get<ProductSupplier[]>(this.productSupplierUrl).pipe(
      tap(()=>this.log('Product Supplier obtained')),
      catchError(this.handleError<ProductSupplier[]>('Get Product Supplier', []))
    );
  }

  deleteProductSupplier(id: number): Observable<ProductSupplier>{
    return this.http.delete<ProductSupplier>(`${this.productSupplierUrl}/${id}`, this.httpOptions).pipe(
      tap(()=>this.log('Product Supplier deleted')),
      catchError(this.handleError<ProductSupplier>('Delete Product Supplier'))
    );
  }

  addProductSupplier(productSupplier: ProductSupplier): Observable<ProductSupplier>{
    return this.http.post<ProductSupplier>(this.productSupplierUrl, productSupplier, this.httpOptions).pipe(
      tap(()=>this.log('Product Supplier added')),
      catchError(this.handleError<ProductSupplier>('Add Product Supplier'))
    );
  }

  udpateProductSupplier(productSupplier: ProductSupplier, id: number): Observable<ProductSupplier>{
    return this.http.put<ProductSupplier>(`${this.productSupplierUrl}/${id}`, productSupplier, this.httpOptions).pipe(
      tap(()=>this.log('Product Supplier Updated')),
      catchError(this.handleError<ProductSupplier>('Update Product Supplier'))
    );
  }

}
