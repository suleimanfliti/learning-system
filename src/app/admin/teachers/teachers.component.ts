import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { teacher } from '../../interfaces/teacher.type';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  addform: FormGroup;
  teachers: teacher[] = [];
  

  constructor(public dialog: MatDialog, public TeachersService: TeacherService) {}

  ngOnInit(): void {
    this.getTeacherInfo();
  }

  public getTeacherInfo() {
    if (!this.teachers[0]) {
      console.log('fetch teachers');
      this.TeachersService.getTeachersApi().subscribe(
        (response) => {
          console.log(response)
          this.teachers = response.data.teacher;
        },
        (error) => { console.log(error); }

      )

    }

  }

  public editTeacherInfo(item : teacher){
    this.dialog.open(AddTeacherComponent,{
     data: item,
    }).afterClosed().subscribe(val => {
      if(val ==='update'){
        this.getTeacherInfo();
      }

    })
  }

  
  public deleteTeacherInfo(id: number){
    this.TeachersService.deleteTeacherApi(id).subscribe({
      next: (res) => {
        alert("teacher deleted");
   
      },
      error: () => { alert("error while teacher delete") }
    })
    }


  OnAdd() {
    this.openDialogAdd();
  }
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddTeacherComponent, {
    }).afterClosed().subscribe(val => {
      if(val === "save"){
        this.getTeacherInfo();
      }
    })
    console.log('here dialog');
  }


  // filtredString: string = '';


}
