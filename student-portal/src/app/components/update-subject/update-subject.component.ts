import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectServiceService } from 'src/app/service/subject-service.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {

  constructor(private router : Router,private subjectService: SubjectServiceService) { }
  subjectupdate={
    subjectId:'',
    subjectTitle:''
  }
  subject:any;
  ngOnInit(): void {
  }
  updateSubject(){
    console.log("Ahnaf");
  }
  assignSubject(){
    console.log("clicked!!!")
    this.router.navigateByUrl('/assign-subject');
  }
  subjectList(){
    this.router.navigateByUrl('/subjectlist');
  }
}
