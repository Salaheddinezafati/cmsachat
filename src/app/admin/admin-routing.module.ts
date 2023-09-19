import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AllhomepagesComponent } from '../shared/components/allhomepages/allhomepages.component';
import { RoleComponent } from './role/role.component';
import { GroupeComponent } from './groupe/groupe.component';
import { UserComponent } from './user/user.component';
import { UserinfoComponent } from '../shared/components/userinfo/userinfo.component';

const routes: Routes = [
  {path:'',component:AdminpageComponent,children:[
    {path:'',component:UserComponent},
    {path:'role',component:RoleComponent},
    {path:'groupe',component:GroupeComponent},
    {path:'user',component:UserComponent},
    {path:'information',component:UserinfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
