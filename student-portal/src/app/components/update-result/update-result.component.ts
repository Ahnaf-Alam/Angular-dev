import { Component, OnInit } from '@angular/core';
import { UpdateResultServiceService } from 'src/app/service/update-result-service.service';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {

  constructor(private updateResultService: UpdateResultServiceService) { }
  public result={
    resultId:'',
    subjectMappingId:'',
    score:'',
    grade:''
  }
  ngOnInit(): void {
  }
  updateResult(){
    alert("Update");
    this.updateResultService.updateResult(this.result).subscribe(
      (data)=>{
        alert("Success");
      },
      (error)=>{
        alert("Something went wrong!!");
      }
      )
  }
}
