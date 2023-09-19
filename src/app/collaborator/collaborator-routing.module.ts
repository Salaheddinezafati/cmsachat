import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorpageComponent } from './collaboratorpage/collaboratorpage.component';
import { AllhomepagesComponent } from '../shared/components/allhomepages/allhomepages.component';
import { RequestComponent } from '../shared/components/request/request.component';
import { UserinfoComponent } from '../shared/components/userinfo/userinfo.component';

const routes: Routes = [
  {path:'',component:CollaboratorpageComponent,children:[
    // {path:'',component:AllhomepagesComponent},
    {path:'request',component:RequestComponent},
    {path:'information',component:UserinfoComponent},
    {path:'',redirectTo:'request',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaboratorRoutingModule { }
