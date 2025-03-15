import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectServiceService } from 'src/app/service/subject-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private subjectservice: SubjectServiceService,private router:Router) { }
  public subject = {
    subjectTitle:''
 };

  ngOnInit(): void {
  }
  addNewSubject(){
     this.subjectservice.addNewSubject(this.subject).subscribe(
        (data)=>{
           alert("Subject Added")
        },
        (error)=>{
          alert("Something went wrong!!")
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
