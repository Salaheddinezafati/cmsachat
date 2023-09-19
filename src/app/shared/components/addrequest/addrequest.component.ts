import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.scss']
})
export class AddrequestComponent {

  requests!:any;
  formrequest!:FormGroup;
  iduser!:any;
  p: number = 1; // Number of users per page, change as needed
  roleuser!:any;
  groups!:any;

  constructor(private userservice:UserService,private fb:FormBuilder,private dialogRef: MatDialogRef<AddrequestComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any){}

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
      this.formrequest.reset();
      this.dialogRef.close(this.formrequest.value);
    }, error => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    });
  }
  close() {
    this.dialogRef.close();
  }


}
