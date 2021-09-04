import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-try-again',
  templateUrl: './try-again.component.html',
  styleUrls: ['./try-again.component.css']
})
export class TryAgainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  TryAgain(){
    this.router.navigateByUrl("check-email")
  }

}
