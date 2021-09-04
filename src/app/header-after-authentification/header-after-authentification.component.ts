import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-after-authentification',
  templateUrl: './header-after-authentification.component.html',
  styleUrls: ['./header-after-authentification.component.css']
})
export class HeaderAfterAuthentificationComponent  {

  title = 'header';
  test:any;
  constructor(){

  }
 
   open(){
     this.test=true;
     console.log(this.test);
   }
   close(){
     
     this.test=false
     
   }

}
