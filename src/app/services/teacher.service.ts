import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { teacher } from '../interfaces/teacher.type';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: teacher[] =[];
  baseURL: string = "https://radiant-refuge-79805.herokuapp.com/api/v1/teachers/";
 
   constructor(private http: HttpClient) { }
 
   getTeachersApi(): Observable <any> {
    return this.http.get<any>(this.baseURL +'all-teacher' )

  }

  addTeacherApi(teachers: teacher)  {
    return this.http.post<any>(this.baseURL +'add-teacher',
      teachers
      );
   
  }

  editTeacherApi(teachers: teacher, id: number) {
    return this.http.patch<any>(this.baseURL + id,
        teachers
      );
  }

   deleteTeacherApi(id: number) {
     return this.http.delete<any>(this.baseURL + id);
   }
  
}
