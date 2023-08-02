import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RoleComponent } from './role/role.component';
import { GroupeComponent } from './groupe/groupe.component';
import { UserComponent } from './user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminpageComponent,
    RoleComponent,
    GroupeComponent,
    UserComponent
  ],
  imports: [
   
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
