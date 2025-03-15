import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectServiceService } from 'src/app/service/subject-service.service';
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  constructor(private router:Router,private subjectService: SubjectServiceService) { }
  subject:any;
  ngOnInit(): void {
  }
  assignSubject(){
    console.log("clicked!!!")
    this.router.navigateByUrl('/assign-subject');
  }
  subjectList(){
    console.log("get")
    this.subjectService.getSubjectList().subscribe(data=>{
      this.subject=data;
    })
  }
  onClickUpdateSubject(){
    this.router.navigateByUrl('/updatesubject');
  }

}
