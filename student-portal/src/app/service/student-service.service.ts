import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
  constructor(private http:HttpClient ) { }
  public addStudent(student:any){
    return this.http.post(`${baseUrl}/add-student?firstName=${student.firstName}&lastName=${student.lastName}&address=${student.address}`,student);
  }
}
