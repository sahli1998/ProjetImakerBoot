import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email.component.html',
  styleUrls: ['./resend-email.component.css']
})
export class ResendEmailComponent implements OnInit {

  loading:any;

  constructor(private resetServ:ResetPasswordService,private router:Router,private toastr: ToastrService) {
    this.resetServ.RepeateYourPassword=false;
   }

  ngOnInit(): void {
  }
  Send(){
    this.loading=true
    this.resetServ.ConfirmeExistantCompte(this.resetServ.CurrentEmail).subscribe(
      (result)=>{
        this.toastr.success('Please check your email!', 'Email was Resended');
        //SaveToken
        this.resetServ.TokenResetPassword=result.object
        this.loading=false;
        

        

      },(err)=>{
        this.loading=false;
        

      }
    )
  }

}
