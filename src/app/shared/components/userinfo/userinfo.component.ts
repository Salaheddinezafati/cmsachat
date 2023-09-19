import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit{
  user!:any;
  iduser!:any;
  role!:any;
  constructor(private userservice:UserService,private fb:FormBuilder){
    
  }

  ngOnInit(): void {
    this.iduser = sessionStorage.getItem("iduserlogin");
    this.role = sessionStorage.getItem("userrole");
    this.getuserinfo(this.iduser);
  }

  getuserinfo(id:any){
    this.userservice.getinformationByuser(id).subscribe(res=>{
      console.log(res);
      this.user = res;
    });
  }

}
