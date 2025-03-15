import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/service/student-service.service';
import { Store } from '@ngxs/store';
import { AddStudent } from 'src/app/store/student.actions';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private studentService: StudentServiceService
    ) { }

  public student = {
     firstName: '',
     lastName: '',
     address: '',
  };

  ngOnInit(): void {
  }
  addStudent(){

     this.studentService.addStudent(this.student).subscribe(
       (data)=>{
        alert("Success")
       },
       (error)=>{
        alert("Something went wrong!!!");
       }
     )
  }
}
