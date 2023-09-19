import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  
  idmanager!:any;   //id user i will use it into commnet by session iduserlogin
  iduser!:any;
  fg!:FormGroup; 
  @Output() closepopup:EventEmitter<boolean>= new EventEmitter();

  @Input() idreq!:number;
  checkpopup!:boolean;

  constructor(private userservice:UserService,private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.idmanager = sessionStorage.getItem("idmanager");
    this.iduser = sessionStorage.getItem("iduserlogin");
    console.log(this.idmanager+" : "+this.iduser);
    console.log("id req "+this.idreq);
    this.fg = this.fb.group({
      
      comment:['',Validators.required],
      request:{
          id:this.idreq
      },
      user:{
          id:this.iduser
      }

    });
    
  }
//http://localhost:8081/api/addcomment
 

  closePopup(){
    this.closepopup.emit(false);
  }

  noapprove(){
    
    if(this.fg.valid){
      this.userservice.addcomment(this.fg.value).subscribe(rescoment=>{

        this.userservice.NoapprovereqBymanager(this.idmanager,this.idreq).subscribe(res=>{
          console.log(res);
        
        },err=>{
          console.log(err);
        });
        this.closePopup();
      })
      
    }

   
  }





}
