import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AllhomepagesComponent } from './components/allhomepages/allhomepages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserinfoComponent,
    HeaderComponent,
    AllhomepagesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    UserinfoComponent,
    HeaderComponent,
    AllhomepagesComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
