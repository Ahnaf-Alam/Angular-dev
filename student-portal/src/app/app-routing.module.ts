import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssignSubjectComponent } from './components/assign-subject/assign-subject.component';
import { CalculateCGPAComponent } from './components/calculate-cgpa/calculate-cgpa.component';
import { ResultComponent } from './components/result/result.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentResultListComponent } from './components/student-result-list/student-result-list.component';
import { StudentComponent } from './components/student/student.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectComponent } from './components/subject/subject.component';
import { UpdateResultComponent } from './components/update-result/update-result.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { UpdateSubjectComponent } from './components/update-subject/update-subject.component';

const routes: Routes = [
   //{ path: 'demo', component: AppComponent},
   { path: 'student', component: StudentComponent},
   { path: 'subject', component: SubjectComponent},
   { path: 'assign-subject', component: AssignSubjectComponent},
   { path: 'update-student', component: UpdateStudentComponent},
   { path: 'result', component: ResultComponent},
   { path: 'update-result', component: UpdateResultComponent},
   { path: 'getstudent', component: StudentListComponent},
   { path: 'getstudentresult', component: StudentResultListComponent},
   { path: 'calculateCGPA', component: CalculateCGPAComponent},
   { path: 'subjectlist', component: SubjectListComponent},
   { path: 'updatesubject', component: UpdateSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
