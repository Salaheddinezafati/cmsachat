import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allhomepages',
  templateUrl: './allhomepages.component.html',
  styleUrls: ['./allhomepages.component.scss']
})
export class AllhomepagesComponent implements OnInit {
  ngOnInit(): void {
    this.userrole = sessionStorage.getItem("userrole");
  }
  userrole!:any;


}
