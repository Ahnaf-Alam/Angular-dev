import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UpdateResultServiceService {

  constructor(private http:HttpClient) { }
  public updateResult(result:any){
    return this.http.put(`${baseUrl}/update-result?resultId=${result.resultId}&studentSubjectMapping=${result.subjectMappingId}&score=${result.score}&grade=${result.grade}`,result)
  }
}
