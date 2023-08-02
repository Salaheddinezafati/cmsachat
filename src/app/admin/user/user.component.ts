import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  users: any[] = [];
  roles!:any;
  groups!:any;
  usersHasroleadmin!:any;
  p: number = 1; // Number of users per page, change as needed
  formmanager!:FormGroup;
  formuseraprov!:FormGroup;
  formcolab!:FormGroup;
  useraprove:boolean=false;
  usercolab:boolean=false;
  usermanager:boolean=true;

  constructor(private userService: UserService,private fb:FormBuilder) {
    this.formmanager = fb.group({
      id: null,
      email: '',
      password: '',
      manager:fb.group({
          nom:'',
          prenom:'',
          number:''
       
      }),
      role:fb.group({
          id:''
      })
    });

    this.formcolab =fb.group({
      id: null,
      email: '',
      password: '',
      collaborator:fb.group({
          nom:'',
          prenom:'',
          number:'',
          manager:fb.group({
            id:''
          })
       
      }),
      role:fb.group({
          id:''
      })
    });

    this.formuseraprov = fb.group({
      id: null,
      email: '',
      password: '',
      useraprovel:fb.group({
          nom:'',
          prenom:'',
          number:'',
          groupe:fb.group({
            id:''
          })
       
      }),
      role:fb.group({
          id:''
      })
    });

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
    this.usercolab=false;
    this.usermanager = false;
    this.useraprove = true;
  }
  clickBtnManager(){
    this.usercolab=false;
    this.useraprove = false;
    this.usermanager = true;
  }
  clickBtnCollab(){
    this.useraprove = false;
    this.usermanager = false;
    this.usercolab=true;
  }
  adduser(){
    let user ;
    if (this.usermanager) {
      user = this.formmanager.value;
    } 
    else if(this.useraprove) {
      user = this.formuseraprov.value;
    }
    else{
      user = this.formcolab.value;
    }

    console.log(user);
    this.userService.addUser(user).subscribe(res=>{
      console.log(res);
      this.getUsers();
      this.formmanager.reset();
      this.formcolab.reset();
      this.formuseraprov.reset();

    },err=>{
      console.log(err);
    });


  }



}
