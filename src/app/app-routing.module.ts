import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'useraproval',loadChildren:()=>import('./useraproval/useraproval.module').then(m=>m.UseraprovalModule)},
  {path:'manager',loadChildren:()=>import('./manager/manager.module').then(m=>m.ManagerModule)},
  {path:'collaborator',loadChildren:()=>import('./collaborator/collaborator.module').then(m=>m.CollaboratorModule)},
  {path:'',redirectTo:'login',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
