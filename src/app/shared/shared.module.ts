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
import { NgxPaginationModule } from 'ngx-pagination';
import { AddrequestComponent } from './components/addrequest/addrequest.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserinfoComponent,
    HeaderComponent,
    AllhomepagesComponent,
    AddrequestComponent,
    RequestmanagerComponent,
    RequestaproverComponent,
    AddrequestComponent,
    RequestComponent
  ],
  imports: [
    MatDialogModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    RequestComponent,
    UserinfoComponent,
    HeaderComponent,
    AllhomepagesComponent,
    ReactiveFormsModule,
    NgxPaginationModule,
    RequestmanagerComponent,
    RequestaproverComponent,
    FormsModule
  ]
})
export class SharedModule { }
