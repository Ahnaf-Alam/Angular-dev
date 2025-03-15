import { Component, OnInit } from '@angular/core';
import { StudentListServiceService } from 'src/app/service/student-list-service.service';

@Component({
  selector: 'app-calculate-cgpa',
  templateUrl: './calculate-cgpa.component.html',
  styleUrls: ['./calculate-cgpa.component.css']
})
export class CalculateCGPAComponent implements OnInit {

  constructor(private studentListService: StudentListServiceService) { }
  public result={
    studentId:'',
  }
  ngOnInit(): void {
  }
  resultList:any
  cgpa=0.0;
  totalCredit=0;
  totalCGPA:any;
  calculateResult(){
     alert("Get");
     this.studentListService.calculateResult(this.result).subscribe((data: any)=>{
        this.resultList=data;
        for(let i=0;i<this.resultList.length;i++){
          let tempscore = this.resultList[i].score;
          if(tempscore>=80){
              this.cgpa+=(3*4.0);
          } else if (tempscore>=75) {
              this.cgpa+=(3*3.75);
          } else if (tempscore>=70) {
              this.cgpa+=(3*3.0);
          } else if (tempscore>=65) {
              this.cgpa+=(3*3.25);
          } else if (tempscore>=55) {
              this.cgpa+=(3*3.0);
          } else if (tempscore>=45) {
              this.cgpa+=(3*2.75);
          }
          this.totalCredit+=3;
         }

         this.cgpa/=this.totalCredit;
         this.totalCGPA = this.cgpa;
     });


  }
}
