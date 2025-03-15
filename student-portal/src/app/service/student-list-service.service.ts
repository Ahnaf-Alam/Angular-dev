import { Injectable } from '@angular/core';

import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentListServiceService {

  constructor(private http:HttpClient) { }
  public getAllStudent(){
     return this.http.get(`${baseUrl}/all`);
  }
  public getStudentResult(result:any){
    return this.http.get(`${baseUrl}/getStudentResult?firstName=${result.firstName}&lastName=${result.lastName}`,result)
  }
  public calculateResult(res:any){
    return this.http.get(`${baseUrl}/calculateCGPA?studentId=${res.studentId}`,res)
  }
}
