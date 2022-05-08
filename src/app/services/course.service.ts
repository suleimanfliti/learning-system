import { Injectable } from '@angular/core';
import { course } from '../interfaces/course.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: course[] =[];
  baseURL: string = "https://radiant-refuge-79805.herokuapp.com/api/v1/courses/";
 
   constructor(private http: HttpClient) { }
 
  
   getCoursesApi(): Observable <any> {
     return this.http.get<any>(this.baseURL +'all-course' )
 
   }
 
   addCourseApi(courses: course)  {
     return this.http.post<any>(this.baseURL +'add-course',
      courses
       );
    
   }
 
   editCourseApi(courses: course, id: number) {
     return this.http.patch<any>(this.baseURL + id,
         courses
       );
   }
 
    deleteCourseApi(id: number) {
      return this.http.delete<any>(this.baseURL + id);
    }
}
