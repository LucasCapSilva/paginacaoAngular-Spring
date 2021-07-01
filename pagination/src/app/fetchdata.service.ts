import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http: HttpClient) {
    
  }
  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
   }
   getApi() {
    return this.http.get('http://localhost:8080/postagens?page=0&size=2');
   }
   getApipage(page:number) {
    return this.http.get(`http://localhost:8080/postagens?page=${page}&size=2`);
   }

}
