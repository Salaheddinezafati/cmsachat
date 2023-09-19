import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.scss']
})
export class CollaborateurComponent implements OnInit{

  users: any[] = [];
  requests!:any;
  formrequest!:FormGroup;
  iduser!:any;
  p: number = 1; // Number of users per page, change as needed
  roleuser!:any;
  groups!:any;

  constructor(private userService:UserService,private fb:FormBuilder,private dialog:MatDialog){}

  ngOnInit(): void {
    this.iduser=sessionStorage.getItem("iduserlogin");
    this.roleuser=sessionStorage.getItem("userrole");

  }

  getallgroups(){
    this.userService.getallgroupe().subscribe(res=>{
      this.groups = res;
    });
  }


  getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.users = response; // Assuming the response contains an array of users

      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteuser(id:any){
    const check = window.confirm("do you want to delete this user");
    if(check){
      this.userService.deleteUserById(id).subscribe(res=>{
        console.log(res);
        this.getUsers();
      },err=>{
        console.log(err);
        this.getUsers();
      });
    }
  }



}
