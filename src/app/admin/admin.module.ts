import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ServicesModule } from '../services/services.module';

import { AddStudentComponent } from './students/add-student/add-student.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

@NgModule({
  declarations: [
  
    AddCourseComponent,
    AddTeacherComponent,
    AddStudentComponent,

  ],
  imports: [
    CommonModule,
    ServicesModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,

    

  ]
})
export class AdminModule { }
