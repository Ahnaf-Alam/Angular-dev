import { Component, OnInit } from '@angular/core';

import { StudentListServiceService } from 'src/app/service/student-list-service.service';

@Component({
  selector: 'app-student-result-list',
  templateUrl: './student-result-list.component.html',
  styleUrls: ['./student-result-list.component.css']
})
export class StudentResultListComponent implements OnInit {

  constructor(private studentListService: StudentListServiceService) { }
  public result={
    firstName:'',
    lastName:''
  }
  resultList: any;
  ngOnInit(): void {
  }
  searchResult(){
    alert('Get');
    this.studentListService.getStudentResult(this.result).subscribe((data: any)=>{
      this.resultList=data;
    })
  }

}
