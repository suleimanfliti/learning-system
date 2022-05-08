import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from './add-course/add-course.component';
import {CourseService } from '../../services/course.service';
import { course } from '../../interfaces/course.type';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: course[] = [];
  constructor(public dialog: MatDialog, public CoursesService: CourseService) {}

  ngOnInit(): void {
    this.getCourseInfo();
  }

  public getCourseInfo() {
    if (!this.courses[0]) {
      console.log('fetch courses');
      this.CoursesService.getCoursesApi().subscribe(
        (response) => {
          console.log(response)
          this.courses = response.data.courses;
        },
        (error) => { console.log(error); }

      )

    }

  }

  public editCourseInfo(item : course){
    this.dialog.open(AddCourseComponent,{
     data: item,
    }).afterClosed().subscribe(val => {
      if(val ==='update'){
        this.getCourseInfo();
      }

    })
  }

  
  public deleteCourseInfo(id: number){
    this.CoursesService.deleteCourseApi(id).subscribe({
      next: (res) => {
        alert("course deleted");
   
      },
      error: () => { alert("error while course delete") }
    })
    }


  OnAdd() {
    this.openDialogAdd();
  }
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
    }).afterClosed().subscribe(val => {
      if(val === "save"){
        this.getCourseInfo();
      }
    })
    console.log('here dialog');
  }


  // filtredString: string = '';
}
