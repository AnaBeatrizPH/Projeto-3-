import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { }

  getAll(){ // criar a função 
    return this.http.get("http://jsonplaceholder.typicode.com/users")

  }
}
