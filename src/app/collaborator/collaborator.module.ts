import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaboratorRoutingModule } from './collaborator-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CollaboratorRoutingModule,
    SharedModule
  ]
})
export class CollaboratorModule { }
