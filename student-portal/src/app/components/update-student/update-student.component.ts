import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor() { }
  public student = {
    STUDENT_ID:'',
    firstName: '',
    lastName: '',
    address: '',
 };
  ngOnInit(): void {
  } 
  updateStudent(){
    console.log("Ahnaf");
  }

}
