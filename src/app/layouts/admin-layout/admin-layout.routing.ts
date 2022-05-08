import { Routes } from "@angular/router";


import { StudentsComponent } from "../../admin/students/students.component";
import { TeachersComponent } from "src/app/admin/teachers/teachers.component";
import { CoursesComponent } from "src/app/admin/courses/courses.component";
import { ProfileComponent } from "src/app/profile/profile.component";

export const AdminLayoutRoutes: Routes = [

  { path: "profile", component: ProfileComponent },
  { path: "admin/students",  component: StudentsComponent },
  { path: "admin/teachers",  component: TeachersComponent },
  { path: "admin/courses",  component: CoursesComponent },

];
