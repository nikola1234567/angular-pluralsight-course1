import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "http://localhost:8080/api/products";

  constructor( private http: HttpClient) {}

   getProducts() : Observable<IProduct[]>{
     return this.http.get<IProduct[]>(this.productUrl).pipe(
       tap(data => console.log('ALL ' + JSON.stringify(data))),
       catchError(this.handleError)
     );
   }

   getProductById(id: number) : Observable<IProduct>{
     return this.http.get<IProduct>(this.productUrl+'/'+id).pipe(
       tap(data => console.log(JSON.stringify(data))),
       catchError(this.handleError)
     );
   }


   private handleError( err: HttpErrorResponse){
     let errorMessage = ' ';
     if(err.error instanceof ErrorEvent){
       //error na stranat na clientot ili so mrezata
       errorMessage = `An error occured: ${err.error.message}`;
     }else{
       // back-end error
       errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
     }
     console.error(errorMessage);
     return throwError (errorMessage);
   }

}
