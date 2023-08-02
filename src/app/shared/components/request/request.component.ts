import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit{

  requests!:any;
  formrequest!:FormGroup;
  iduser!:any;
  p: number = 1; // Number of users per page, change as needed
  roleuser!:any;
  groups!:any;

  constructor(private userservice:UserService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.iduser=sessionStorage.getItem("iduserlogin");
    this.roleuser=sessionStorage.getItem("userrole");
    this.formrequest = this.fb.group({
      id: null,
      label: '',
      comment: '',
      user: this.fb.group({
        id: this.iduser,
      }),
      groupe: this.fb.group({
        id: '',
      }),
    });

    this.getallgroups();
    this.getallrequests();

  }

  getallgroups(){
    this.userservice.getallgroupe().subscribe(res=>{
      this.groups = res;
    });
  }
  getallrequests(){
    this.userservice.getallrequestsbyuser(this.iduser).subscribe(res=>{
      this.requests = res;
    });
  }
  addgroupe(){
    this.userservice.addrequest(this.formrequest.value).subscribe(res=>{
      console.log(res);
      this.getallrequests();
    });
  }



}
