import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchcourse=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  addcourse=(dataTOsend:any)=>{
    return this.http.post("http://localhost:8080/addcourse",dataTOsend)
  }
  searchcourse(dataTOsend:any){
    return this.http.post("http://localhost:8080/search",dataTOsend)
  }
}
