import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit{

  groups!:any;
  p: number = 1; // Number of users per page, change as needed
  formgroupename!:FormGroup;
  constructor(private userService: UserService,private fb:FormBuilder) {
    this.formgroupename = fb.group({
      namegroupe:''
    });
  }
  ngOnInit(): void {
    this.getallgroups();
  }

  getallgroups(){
    this.userService.getallgroupe().subscribe(res=>{
      this.groups = res;
    });
  }

  addgroupe(){
    let groupe = this.formgroupename.value;
    this.userService.addgroupe(groupe).subscribe(res=>{
      console.log(res);
      this.getallgroups();
      this.formgroupename.reset();
    },err=>{
      console.log(err);
    });

  }
}
