import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllhomepagesComponent } from '../shared/components/allhomepages/allhomepages.component';
import { ManagerpageComponent } from './managerpage/managerpage.component';
import { RequestComponent } from '../shared/components/request/request.component';
import { UserinfoComponent } from '../shared/components/userinfo/userinfo.component';

const routes: Routes = [
  {path:'',component:ManagerpageComponent,children:[
    {path:'request',component:RequestComponent},
    {path:'information',component:UserinfoComponent},
    {path:'',redirectTo:'request',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
