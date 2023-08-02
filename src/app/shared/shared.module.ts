import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AllhomepagesComponent } from './components/allhomepages/allhomepages.component';
import { RouterModule } from '@angular/router';
import { RequestComponent } from './components/request/request.component';
import { RequestmanagerComponent } from './components/requestmanager/requestmanager.component';
import { RequestaproverComponent } from './components/requestaprover/requestaprover.component';



@NgModule({
  declarations: [
    UserinfoComponent,
    HeaderComponent,
    AllhomepagesComponent,
    RequestComponent,
    RequestmanagerComponent,
    RequestaproverComponent
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
    RequestmanagerComponent,
    RequestaproverComponent,
    FormsModule
  ]
})
export class SharedModule { }
