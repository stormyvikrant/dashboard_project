import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TableResponse} from '../models/table-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private http:HttpClient=inject(HttpClient)


  getAllProducts():Observable<TableResponse> {
  return this.http.get<TableResponse>('https://01.fy25ey01.64mb.io/');
  }
}
