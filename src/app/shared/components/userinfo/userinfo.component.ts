import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit{

  constructor(private userservice:UserService,private fb:FormBuilder){
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
