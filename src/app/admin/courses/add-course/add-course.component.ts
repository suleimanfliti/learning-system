import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/services/course.service';
import { course } from '../../../interfaces/course.type';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  addform: FormGroup;
  @Input() coursee: course;
  actionBtn: string = "Add"


  constructor(
    public fb: FormBuilder,
    private CoursesService: CourseService,
    public dialogRef: MatDialogRef<AddCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: course

  ) { }


  ngOnInit(): void {

    this.initCourseForm();
    this.editCourseForm();

  }

  addCourse() {
    if (!this.addform.valid) {
      return;
    }
    if (!this.editData) {
    
        console.log(this.addform.value)
        this.CoursesService.addCourseApi(this.addform.value).subscribe({
          next: (res) => {
            alert("course has been added successfully");
            this.addform.reset();
            this.dialogRef.close('save')
          },
          error: () => { alert("Error while adding course") }
        }

        )
    
    } else {
      this.updateCourse()
    }
  }

  updateCourse() {
    this.CoursesService.editCourseApi(this.addform.value, this.editData.id).subscribe({
      next: (res) => {
        alert("course has been updated successfully");
        console.log(res);
        this.addform.reset();
        this.dialogRef.close('update')
      },
      error: () => { alert("error while updating") }
    })
  }


  initCourseForm() {
    this.addform = this.fb.group({
      name: ["", [Validators.required]],
      courseCode: ["", [Validators.required]],
      specialization: ["", [Validators.required]],
      type: ["", [Validators.required]],
      academicYear: ["", [Validators.required]],
      graduation: ["", [Validators.required]],
 
    });
  }

  editCourseForm(){
    if (this.editData) {
      this.actionBtn = "Update";
      this.addform.controls['name'].setValue(this.editData.name);
      this.addform.controls['courseCode'].setValue(this.editData.courseCode);
      this.addform.controls['specialization'].setValue(this.editData.specialization);
      this.addform.controls['type'].setValue(this.editData.type);
      this.addform.controls['academicYear'].setValue(this.editData.academicYear);
      this.addform.controls['graduation'].setValue(this.editData.graduation);
    
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

  grads: string[] =[
      'YES',
      'NO',
  ];

  years: string[]=[
    'First','Second','third','Fourth','Fifth'
  ]
  specializations: string[] = [
    'Software',
    'AI',
    'Networks',

  ];

}
