import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnChanges{

  users!: any;
  roles!:any;
  groups!:any;
  usersHasroleadmin!:any;
  p: number = 1; // Number of users per page, change as needed
  userclickedbtn:boolean=false;
  userrole!:any;
  jj!:any;

  constructor(private userService: UserService) {};

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      this.users = changes['users'].currentValue;
      console.log(this.users);
    }else{
      console.log("no changes");
    }
  }

  ngOnInit(): void {
    this.getallroles();
    this.getallusermanager();
    this.getallgroups();
    this.getUsers();
  }

  getallroles(){
    this.userService.getallroles().subscribe(res=>{
      this.roles = res
    });
  }

  getallusermanager(){
    this.userService.getallusermanager().subscribe(res=>{
      this.usersHasroleadmin = res
      console.log(this.usersHasroleadmin[0]?.manager?.id);
    });
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

  clickBtnUserAprove(){
    this.userclickedbtn = true;
    this.userrole = "useraprove"
  }
  clickBtnManager(){
    this.userclickedbtn = true;
    this.userrole = "manager"
  }
  clickBtnCollab(){
    this.userclickedbtn = true;
    this.userrole = "colab"
  }
  
  updateUsers(updatedUsers: any) {
    console.log('Received updated users:', updatedUsers);
    this.users = updatedUsers;
  }
  
  


}
