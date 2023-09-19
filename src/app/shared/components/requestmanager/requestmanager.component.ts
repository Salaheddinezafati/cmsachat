import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-requestmanager',
  templateUrl: './requestmanager.component.html',
  styleUrls: ['./requestmanager.component.scss']
})
export class RequestmanagerComponent implements OnInit{
  idmanager!:any;
  requests!:any;
  p:number =1; //for the pagination

  constructor(private userservice:UserService){

  }

  ngOnInit(): void {
    this.idmanager = sessionStorage.getItem("idmanager");
    console.log(this.idmanager);
    this.getallrequestsbymanager();
  }
  getallrequestsbymanager(){
    this.userservice.getallrequestBymanger(this.idmanager).subscribe(res=>{
      console.log(res);
      this.requests = res;
    });
  }

  noapprove(reqid:any){
    this.userservice.NoapprovereqBymanager(this.idmanager,reqid).subscribe(res=>{
      console.log(res);
      this.getallrequestsbymanager();
    },err=>{
      console.log(err);
    });
  }
  approve(reqid:any){
    this.userservice.approvereqBymanager(this.idmanager,reqid).subscribe(res=>{
      console.log(res);
      this.getallrequestsbymanager();
    },err=>{
      console.log(err);
    });

  }
}
