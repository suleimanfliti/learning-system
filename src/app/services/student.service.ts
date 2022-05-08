import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../interfaces/student.type';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
students: student[] =[];
 baseURL: string = "https://radiant-refuge-79805.herokuapp.com/api/v1/students/";

  constructor(private http: HttpClient) { }

 
  getStudentsApi(): Observable <any> {
    return this.http.get<any>(this.baseURL +'all-student' )

  }

  addStudentApi(students: student)  {
    return this.http.post<any>(this.baseURL +'add-student',
      students
      );
   
  }

  editStudentApi(students: student, id: number) {
    return this.http.patch<any>(this.baseURL + id,
        students
      );
  }

   deleteStudentApi(id: number) {
     return this.http.delete<any>(this.baseURL + id);
   }
}
