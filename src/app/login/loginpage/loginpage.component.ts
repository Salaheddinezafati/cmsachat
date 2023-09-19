import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  login!:FormGroup;
  userlogin!:any;
  constructor(private userservice:UserService ,private fb:FormBuilder,private router:Router){
    this.login=fb.group({
      email:'',
      password:''
    })
  }

  loginform(){
    console.log(this.login.value);
    this.userservice.login(this.login.value).subscribe(res=>{

      this.userlogin = res;
      sessionStorage.setItem("iduserlogin",this.userlogin?.id)
      sessionStorage.setItem("userrole",this.userlogin.role?.namerole)
      console.log(sessionStorage.getItem("iduserlogin")+" "+sessionStorage.getItem("userrole"));
      if(sessionStorage.getItem("userrole")=="admin"){
        this.router.navigate(['admin']);
      }
      else if(sessionStorage.getItem("userrole")=="UserTraitement"){
        sessionStorage.setItem('namegroupe',this.userlogin.useraprovel?.groupe?.namegroupe);
        sessionStorage.setItem('iduseraprove',this.userlogin.useraprovel?.id);
        this.router.navigate(['useraproval']);
      }
      else if(sessionStorage.getItem("userrole")=="manager"){
        sessionStorage.setItem('idmanager',this.userlogin.manager?.id);
        this.router.navigate(['manager']);
      }
      else if(sessionStorage.getItem("userrole")=="collaborateur"){
        this.router.navigate(['collaborator']);
      }
      else{
        console.log("not user");
      }
    },error => alert("Matricule ou Mot de passe Incorrect!!!"));

  }


}
