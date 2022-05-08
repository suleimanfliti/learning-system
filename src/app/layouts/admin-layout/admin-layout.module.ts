import { NgModule } from "@angular/core";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { StudentsComponent } from "src/app/admin/students/students.component";
import { TeachersComponent } from "src/app/admin/teachers/teachers.component";
import { CoursesComponent } from "src/app/admin/courses/courses.component";
import { ProfileComponent } from "src/app/profile/profile.component";
import { MatCardModule } from "@angular/material/card";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,


    
  ],
  declarations: [
    StudentsComponent,
    TeachersComponent, 
    CoursesComponent, 
    ProfileComponent 

  ]
})
export class AdminLayoutModule {}
