import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isadmin!:boolean;
  isuseraprove!:boolean;
  ismanager!:boolean;
  iscolab!:boolean;
  constructor(private router:Router){}

  ngOnInit(): void {
    this.isadmin = sessionStorage.getItem("userrole")=="admin";
    this.isuseraprove = sessionStorage.getItem("userrole")=="UserTraitement";
    this.ismanager = sessionStorage.getItem("userrole")=="manager";
    this.iscolab =sessionStorage.getItem("userrole")=="collaborateur";

  }

  logout(){
    sessionStorage.removeItem("userrole");
    sessionStorage.removeItem("iduserlogin");
    this.router.navigate(['login']);
  }

}
