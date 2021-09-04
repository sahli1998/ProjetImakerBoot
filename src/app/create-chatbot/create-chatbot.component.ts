import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-create-chatbot',
  templateUrl: './create-chatbot.component.html',
  styleUrls: ['./create-chatbot.component.sass']
})
export class CreateChatbotComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  creerChat(){
    console.log('hello')
    this.router.navigateByUrl('/chatBoot')
  }

}
