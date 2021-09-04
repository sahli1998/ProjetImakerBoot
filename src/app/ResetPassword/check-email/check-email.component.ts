import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: [ 
    './check-email.component.css']
})
export class CheckEmailComponent implements OnInit {


  EmailForm!: FormGroup;
  ConfirmeEmail:boolean=false ; 
  loading!:boolean;
  constructor(private resertServ:ResetPasswordService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

    ngOnInit() {
      let formControl ={
        email : new FormControl('',[Validators.required, Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
      }
      this.EmailForm = this.formBuilder.group(formControl);
    }  
          
      
  
    get f() { return this.EmailForm.controls;}
  
    Confirme(){
      
      this.loading=true;
      console.log(this.loading)
      this.resertServ.ConfirmeExistantCompte(this.f.email.value).subscribe(
        (result)=>{
          
          this.toastr.success('Please check your email!', 'Email was Sended');
          
          console.log(this.resertServ.TokenResetPassword);
          this.router.navigateByUrl("resend-email");
          this.resertServ.CurrentEmail=this.f.email.value;
          this.loading=false;
          this.resertServ.RepeateYourPassword=true;
  
          
  
        },(err)=>{
          console.log(err)
          this.toastr.error('Please Reapeat your email!', 'Email is not founded');
          this.loading=false;
  
        }
      )
    }

}
