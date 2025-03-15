import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor(private http:HttpClient) { }
  public addNewSubject(subject:any){
     return this.http.post(`${baseUrl}/add-newSubject?subjectTitle=${subject.subjectTitle}`,subject)
  }
  public getSubjectList(){
    return this.http.get(`${baseUrl}/all-subject`)
  }
}
