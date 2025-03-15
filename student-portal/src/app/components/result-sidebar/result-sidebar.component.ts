import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-sidebar',
  templateUrl: './result-sidebar.component.html',
  styleUrls: ['./result-sidebar.component.css']
})
export class ResultSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickUpdateResult(){
      this.router.navigateByUrl('/update-result');
  }
  onClickGetResult(){
    this.router.navigateByUrl('/getstudentresult')
  }
  onClickCalculateCGPA(){
    this.router.navigateByUrl('/calculateCGPA')
  }
}
