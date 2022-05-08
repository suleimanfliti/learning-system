import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentService } from '../../services/student.service';
import { student } from '../../interfaces/student.type';
import { ConfirmationService } from 'src/app/services/confirmation.service';




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: student[] = [];
  constructor(public dialog: MatDialog, public StudentsService: StudentService ,public confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.getStudentInfo();
  }

  public getStudentInfo() {
    if (!this.students[0]) {
      console.log('fetch students');
      this.StudentsService.getStudentsApi().subscribe(
        (response) => {
          console.log(response)
          this.students = response.data.students;
        },
        (error) => { console.log(error); }

      )

    }

  }

  public editStudentInfo(item : student){
    this.dialog.open(AddStudentComponent,{
     data: item,
    }).afterClosed().subscribe(val => {
      if(val === "update"){
        this.getStudentInfo();
      }

    })
  }

  
  // public deleteStudentInfo(id: number){
  //   this.StudentsService.deleteStudentApi(id).subscribe({
  //     next: (res) => {
  //       alert("student deleted");
   
  //     },
  //     error: () => { alert("error while student delete") }
  //   })
  //   }


  public deleteStudentInfo(id: number)   {
    // Open the confirmation dialog
    const confirmation = this.confirmationService.open({
        title  : 'Delete contact',
        message: 'Are you sure you want to delete this contact? This action cannot be undone!',
        actions: {
            confirm: {
                label: 'Delete'
            }
        }
    });

    // Subscribe to the confirmation dialog closed action
    confirmation.afterClosed().subscribe((result) => {

        // If the confirm button pressed...
        if ( result === 'confirmed' )
        {
      
         this.StudentsService.deleteStudentApi(id).subscribe({
           next: (res) => {
             alert("student deleted");
        
           },
           error: () => { alert("error while student delete") }
         })
        }
    });

}

  OnAdd() {
    this.openDialogAdd();
  }
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
    }).afterClosed().subscribe(val => {
      if(val === "save"){
        this.getStudentInfo();
      }
    })
    console.log('here dialog');
  }




  
  // filtredString: string = '';

}
