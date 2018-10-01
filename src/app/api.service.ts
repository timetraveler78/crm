import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerType } from './customers/customers.page';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 endpoint = "https://my-json-server.typicode.com/timetraveler78/db/blob/master/";
 
  getCustomers(page:number): Observable<CustomerType[]>
  {
    return this.http.get<CustomerType[]>(this.endpoint + 'customer');
  }
}
