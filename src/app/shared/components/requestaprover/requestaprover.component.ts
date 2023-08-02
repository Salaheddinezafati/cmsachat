import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-requestaprover',
  templateUrl: './requestaprover.component.html',
  styleUrls: ['./requestaprover.component.scss']
})
export class RequestaproverComponent implements OnInit{
  
  groupename!:any;
  iduseraprove!:any
  requests!:any;
  p:number =1; //for the pagination

  constructor(private userservice:UserService){

  }

  ngOnInit(): void {
    this.iduseraprove = sessionStorage.getItem("iduseraprove");
    this.groupename = sessionStorage.getItem("namegroupe");
    console.log(this.groupename);
    this.getallrequestsbymanager();
  }
  getallrequestsbymanager(){
    this.userservice.getallreqByuseraprovegroupe(this.groupename).subscribe(res=>{
      console.log(res);
      this.requests = res;
    });
  }

  noapprove(reqid:any){
    this.userservice.NoapprovereqByuser(this.iduseraprove,reqid).subscribe(res=>{
      console.log(res);
      this.getallrequestsbymanager();
    },err=>{
      console.log(err);
    });
  }
  approve(reqid:any){
    this.userservice.approvereqByuser(this.iduseraprove,reqid).subscribe(res=>{
      console.log(res);
      this.getallrequestsbymanager();
    },err=>{
      console.log(err);
    });

  }
}
