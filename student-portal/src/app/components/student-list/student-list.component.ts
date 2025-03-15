import { Component, OnInit } from '@angular/core';
import { StudentListServiceService } from 'src/app/service/student-list-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentListService: StudentListServiceService) { }
  studentList: any;
  ngOnInit(): void {
    this.studentList = this.studentListService.getAllStudent().subscribe((data: any)=>{
        this.studentList=data;
    });
  }

}
