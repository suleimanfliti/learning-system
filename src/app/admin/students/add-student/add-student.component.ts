import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { student } from '../../../interfaces/student.type';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  addform: FormGroup;
  @Input() studentt: student;
  actionBtn: string = "Add"


  constructor(
    public fb: FormBuilder,
    private StudentsService: StudentService,
    public dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: student

  ) { }


  ngOnInit(): void {

    this.initstudentForm();
    this.editstudentForm();

  }

  addStudent() {
    if (!this.addform.valid) {
      return;
    }
    if (!this.editData) {
    
        console.log(this.addform.value)
        this.StudentsService.addStudentApi(this.addform.value).subscribe({
          next: (res) => {
            alert("Student has been added successfully");
            this.addform.reset();
            this.dialogRef.close('save')
          },
          error: () => { alert("Error while adding student") }
        }

        )
    
    } else {
      this.updateStudent()
    }
  }

  updateStudent() {
    this.StudentsService.editStudentApi(this.addform.value, this.editData.id).subscribe({
      next: (res) => {
        alert("Student has been updated successfully");
        console.log(res);
        this.addform.reset();
        this.dialogRef.close('update')
      },
      error: () => { alert("error while updating") }
    })
  }


  initstudentForm() {
    this.addform = this.fb.group({
      fname: ["", [Validators.required]],
      lname: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      nationality: ["", [Validators.required]],
      specialization: ["", [Validators.required]],
      birthdate: ["", Validators.required],

    });
  }

  editstudentForm(){
    if (this.editData) {
      this.actionBtn = "Update";
      this.addform.controls['fname'].setValue(this.editData.fname);
      this.addform.controls['lname'].setValue(this.editData.lname);
      this.addform.controls['email'].setValue(this.editData.email);
      this.addform.controls['birthdate'].setValue(this.editData.birthdate);
      this.addform.controls['phone'].setValue(this.editData.phone);
      this.addform.controls['address'].setValue(this.editData.address);
      this.addform.controls['nationality'].setValue(this.editData.nationality);
      this.addform.controls['specialization'].setValue(this.editData.specialization);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  reset() {
    this.addform.reset();
  }

  getErrorMessage(nameControls: string) {
    if (this.addform.controls[nameControls].hasError('required')) {
      return 'You must enter a value !!';
    } else if (this.addform.controls[nameControls].hasError('email')) {
      return 'Enter the valid email !!';
    } else return 'At least 8 chracter ';
  }

  specializations: string[] = [
    'Software',
    'AI',
    'Networks',

  ];

}
