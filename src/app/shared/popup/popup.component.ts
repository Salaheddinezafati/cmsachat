import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit,OnChanges{

  users!: any ;
  roles!:any;
  groups!:any;
  usersHasroleadmin!:any;
  p: number = 1; // Number of users per page, change as needed
  formmanager!:FormGroup;
  formuseraprov!:FormGroup;
  formcolab!:FormGroup;

  @Input() getdatafromadminuser!:any;
  @Output() outpopup:EventEmitter<boolean> = new EventEmitter();
  @Output() usersdatatoadmin:EventEmitter<any> = new EventEmitter();

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
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      console.log("changes");
    }
  }

  ngOnInit(): void {
    this.getallroles();
    this.getallusermanager();
    this.getallgroups();
    
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




 


  adduser(){
    let user ;
    if (this.getdatafromadminuser=='manager') {
      user = this.formmanager.value;
    } 
    else if(this.getdatafromadminuser=='useraprove') {
      user = this.formuseraprov.value;
    }
    else{
      user = this.formcolab.value;
    }

    console.log(user);
    this.userService.addUser(user).subscribe(res=>{
      console.log(res);
      this.userService.getUsers().subscribe(
        (response: any) => {
          this.users = response; // Assuming the response contains an array of users
          console.log("***************** end users");
          
          console.log('Emitting users data:', this.users);
          console.log(this.usersdatatoadmin.emit(this.users));
          
          this.formmanager.reset();
          this.formcolab.reset();
          this.formuseraprov.reset();
          this.goout();
        },
        (error: any) => {
          console.error('Error fetching users:', error);
        }
      );

     

    },err=>{
      console.log(err);
    });


  }

  goout(){
    //this.senduserstoadmin();
    this.outpopup.emit(false);
  }
 
  senddatatest(){
    let arr = [
      {id:0,name:'salah'},
      {id:0,name:'salah'},
      {id:0,name:'salah'},
      {id:0,name:'salah'},
    ]
    this.usersdatatoadmin.emit(arr);
    console.log("emited");
    this.goout();
  }


}