import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  userclickedbtn:boolean = false;
  @Output() groupstoadmin:EventEmitter<any> = new EventEmitter(); //hadi pour creer evenment idoz l parent
  constructor(private userService: UserService,private fb:FormBuilder) {
    this.formgroupename = fb.group({
      namegroupe:''
    });
  }
  ngOnInit(): void {
    this.getallgroups();
  }

  getallgroups(){ //hadi ghadi t7ayd odar f addgroupe 
    this.userService.getallgroupe().subscribe(res=>{
      this.groups = res;
      this.groupstoadmin.emit(this.groups)
    });
  }

  addgroupe(){
    let groupe = this.formgroupename.value;
    this.userService.addgroupe(groupe).subscribe(res=>{
      //ha fin ayt7at 
     
      console.log(res);
      this.getallgroups();
      this.formgroupename.reset();
    },err=>{
      console.log(err);
    });

  }
  showpopup(){
    this.userclickedbtn = true;
  }
}
