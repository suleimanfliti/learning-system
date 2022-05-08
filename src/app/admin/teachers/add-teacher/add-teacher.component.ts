import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { teacher } from 'src/app/interfaces/teacher.type';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  addform: FormGroup;
  @Input() teacherr: teacher;
  actionBtn: string = "Add"


  constructor(
    public fb: FormBuilder,
    private TeachersService: TeacherService,
    public dialogRef: MatDialogRef<AddTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: teacher

  ) { }


  ngOnInit(): void {

    this.initTeacherForm();
    this.editTeacherForm();

  }

  addTeacher() {
    if (!this.editData) {
      if (this.addform.valid) {
        this.TeachersService.addTeacherApi(this.addform.value).subscribe({
          next: (res) => {
            alert("Teacher has been added successfully");
            this.addform.reset();
            this.dialogRef.close('save')
          },
          error: () => { alert("Error while adding Teacher") }
        }

        )
      }else{
        return;
      }
    } else {
      this.updateTeacher()
    }
  }

  updateTeacher() {
    this.TeachersService.editTeacherApi(this.addform.value, this.editData.id).subscribe({
      next: (res) => {
        alert("Teacher has been updated successfully");
        console.log(res);
        this.addform.reset();
        this.dialogRef.close('update')
      },
      error: () => { alert("error while updating") }
    })
  }


  initTeacherForm() {
    this.addform = this.fb.group({
      fname: ["", [Validators.required]],
      lname: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]],
      birthdate: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      nationality: ["", [Validators.required]],
      type: ["", [Validators.required]],
      courseCode: ["", Validators.required],

    });
  }

  editTeacherForm(){
    if (this.editData) {
      this.actionBtn = "Update";
      this.addform.controls['fname'].setValue(this.editData.fname);
      this.addform.controls['lname'].setValue(this.editData.lname);
      this.addform.controls['email'].setValue(this.editData.email);
      this.addform.controls['birthdate'].setValue(this.editData.birthdate);
      this.addform.controls['phone'].setValue(this.editData.phone);
      this.addform.controls['address'].setValue(this.editData.address);
      this.addform.controls['nationality'].setValue(this.editData.nationality);
      this.addform.controls['type'].setValue(this.editData.type);
      this.addform.controls['courseCode'].setValue(this.editData.courseCode);
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
  types: string[] = [
    'theoretical',
    'practical',
    'Administrative',

  ];
}
