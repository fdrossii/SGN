import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Sale } from '../interfaces/sale';
import { Invoice } from '../interfaces/invoice'



@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private saleUrl: string = 'http://localhost:8080/api/sales'
  httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

  constructor(private http: HttpClient) { }

  private log(message: string): string{
    return `Sale service: ${message}`;
  }

  private handleError<T>(operation: string, result?: T){
    return(error: any): Observable<T> =>{
      console.error(error);
      console.log(this.log(`${operation} fail: ${error.message}`));
      return of (result as T);
    }
  }

  getSales(): Observable<Sale[]>{
    return this.http.get<Sale[]>(this.saleUrl).pipe(
      tap(()=>this.log('Sales obtained')),
      catchError(this.handleError<Sale[]>('Get Sales', []))
    );
  }

  deleteSale(id: number): Observable<Sale>{
    return this.http.delete<Sale>(`${this.saleUrl}/${id}`, this.httpOptions).pipe(
      tap(()=>this.log('Sale deleted')),
      catchError(this.handleError<Sale>('Delete Sale'))
    );
  }
  
  addSale(sale: Sale): Observable<Sale>{
    console.log("estoy al principio")
    return this.http.post<Sale>(this.saleUrl, sale, this.httpOptions).pipe(
      tap(()=> console.log("estoy dentro del tap")),
      catchError(this.handleError<Sale>('Add Sale'))
    );    
  }

  generateInvoicePdf(invoice: Invoice){
    return this.http.post(`${this.saleUrl}/pdf`, invoice, {headers: {'Content-Type' : 'application/json'}, responseType: "blob"});
  }
}
