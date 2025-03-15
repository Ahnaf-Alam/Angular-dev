import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AssignSubjectServiceService {
  
  constructor(private http:HttpClient) { }
  public addSubjectMapping(subjectMapping:any){
    return this.http.post(`${baseUrl}/add-subjectMapping?studentId=${subjectMapping.studentId}&subjectId=${subjectMapping.subjectId}`,subjectMapping)
  }
}
