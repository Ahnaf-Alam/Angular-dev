import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentComponent } from './components/student/student.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssignSubjectComponent } from './components/assign-subject/assign-subject.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ResultComponent } from './components/result/result.component';
import { ResultSidebarComponent } from './components/result-sidebar/result-sidebar.component';
import { UpdateResultComponent } from './components/update-result/update-result.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentResultListComponent } from './components/student-result-list/student-result-list.component';
import { CalculateCGPAComponent } from './components/calculate-cgpa/calculate-cgpa.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { UpdateSubjectComponent } from './components/update-subject/update-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    SubjectComponent,
    SidebarComponent,
    AssignSubjectComponent,
    UpdateStudentComponent,
    ResultComponent,
    ResultSidebarComponent,
    UpdateResultComponent,
    StudentListComponent,
    StudentResultListComponent,
    CalculateCGPAComponent,
    SubjectListComponent,
    UpdateSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
