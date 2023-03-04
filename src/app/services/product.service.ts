import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, Observable, of, tap } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string = 'http://localhost:8080/api/products';
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private http: HttpClient) { }

  private log(message: string): string{
    return `Product service: ${message}`;
  }

  private handleError<T>(operation: string, result?: T){
    return(error: any): Observable<T> =>{
      console.error(error);
      console.log(this.log(`${operation} fail: ${error.message}`));
      return of (result as T);
    }
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.productsUrl}/${id}`, this.httpOptions).pipe(
      tap(()=>this.log('Product obtained')),
      catchError(this.handleError<Product>('Get Product'))
    );
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(()=>this.log('Products obtained')),
      catchError(this.handleError<Product[]>('Get Products', []))
    );
  }

  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(`${this.productsUrl}/${id}`, this.httpOptions ).pipe(
      tap(()=>this.log('Product deleted')),
      catchError(this.handleError<Product>('Delete Product'))
    );
  }  

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions).pipe(
      tap(()=>this.log('Product added')),
      catchError(this.handleError<Product>('Add Product'))
    );
  } 

  updateProductStock(id: number, quantity: number): Observable<Product>{
    return this.http.put<Product>(`${this.productsUrl}/${id}`, quantity, this.httpOptions).pipe(
      tap(()=>this.log('Update stock')),
      catchError(this.handleError<Product>('Update Product'))
    );
  }  
  
}
