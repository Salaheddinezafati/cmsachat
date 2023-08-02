import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit{
  roles!:any;
  p: number = 1; // Number of users per page, change as needed
  formroleename!:FormGroup;
  constructor(private userService: UserService,private fb:FormBuilder) {
    this.formroleename = fb.group({
      namerole:''
    });
  }
  ngOnInit(): void {
    this.getallroles();
  }

  getallroles(){
    this.userService.getallroles().subscribe(res=>{
      this.roles = res;
    });
  }

  addrole(){
    let role = this.formroleename.value;
    console.log(role);
    this.userService.addrole(role).subscribe(res=>{
      console.log(res);
      this.getallroles();
      this.formroleename.reset();
    },err=>{
      console.log(err);
    });

  }
  
}
