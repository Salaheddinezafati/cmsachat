import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseraprovalRoutingModule } from './useraproval-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UseraprovalpageComponent } from './useraprovalpage/useraprovalpage.component';


@NgModule({
  declarations: [
    UseraprovalpageComponent
  ],
  imports: [
    CommonModule,
    UseraprovalRoutingModule,
    SharedModule
  ]
})
export class UseraprovalModule { }
