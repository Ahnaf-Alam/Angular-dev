import { Component, OnInit } from '@angular/core';
import { AssignSubjectServiceService } from 'src/app/service/assign-subject-service.service';
import { Router } from '@angular/router';
import { SubjectServiceService } from 'src/app/service/subject-service.service';
@Component({
  selector: 'app-assign-subject',
  templateUrl: './assign-subject.component.html',
  styleUrls: ['./assign-subject.component.css']
})
export class AssignSubjectComponent implements OnInit {

  constructor(private assignSubjectService: AssignSubjectServiceService,private router:Router,private subjectService: SubjectServiceService) { }
  public subjectMapping={
    studentId: '',
    subjectId:''
  }
  subject:any;
  ngOnInit(): void {
  }
  mapSubject(){
    console.log("assingned!!");
    this.assignSubjectService.addSubjectMapping(this.subjectMapping).subscribe(
      (data)=>{
         alert("Assign Subject to Student");
      },
      (error)=>{
        alert("Something went wrong!!");
      }
      )
  }
  assignSubject(){
    console.log("clicked!!!")
    this.router.navigateByUrl('/assign-subject');
  }
  subjectList(){
    this.router.navigateByUrl('/subjectlist');
  }
  onClickUpdateSubject(){
    this.router.navigateByUrl('/updatesubject');
  }

}
