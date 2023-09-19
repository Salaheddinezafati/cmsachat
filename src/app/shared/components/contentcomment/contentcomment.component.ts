import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-contentcomment',
  templateUrl: './contentcomment.component.html',
  styleUrls: ['./contentcomment.component.scss']
})
export class ContentcommentComponent {
  @Output() closepopup:EventEmitter<boolean>= new EventEmitter();
  @Input() datacomment!:any;
  
  closePopup(){
    this.closepopup.emit(false);
  }

}
