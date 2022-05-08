import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { ServicesModule } from "./services/services.module";
import { DialogComponent } from './confirmation/dialog/dialog.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ComponentsModule,
    ServicesModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,

    ToastrModule.forRoot(),

  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
