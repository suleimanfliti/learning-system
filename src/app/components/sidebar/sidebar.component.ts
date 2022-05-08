import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}
export const ROUTES: RouteInfo[] = [

  {
    path: "admin/students",
    title: "Students",
    icon: "icon-single-02",
  },
  {
    path: "admin/teachers",
    title: "teachers",
    icon: "icon-single-02",
  },
  {
    path: "admin/courses",
    title: "courses",
    icon: "icon-single-02",
  },




];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
