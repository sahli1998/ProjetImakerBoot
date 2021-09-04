import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent implements OnInit {

  ResetForm!: FormGroup;
  loading!:boolean;
  token!:string;
  constructor(private resertServ:ResetPasswordService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data)=>{
      
      this.token=data.token
      console.log(this.resertServ.TokenResetPassword);
    })
    this.resertServ.ConfirmeToken(this.token).subscribe((result)=>{
      console.log('success')
        this.toastr.success("Success"," Reset Password Confirmation")
        this.resertServ.TokenResetPassword=this.token;
        console.log(this.resertServ.TokenResetPassword)
        localStorage.setItem("TokenReset",this.resertServ.TokenResetPassword);
    },(err)=>{
      this.toastr.error("Failed","Reset Password Confirmation")
      this.router.navigateByUrl("try-again");


    })


    let formControl ={
      newPassword : new FormControl('',[Validators.required , Validators.minLength(8),Validators.maxLength(20)]),
      repeatNewPassword : new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(20)])
    }
    this.ResetForm = this.formBuilder.group(formControl);
  }  
  
  get f() { return this.ResetForm.controls;}
  Reset(){
    this.loading=true;
    this.resertServ.ResetNewPassword(this.f.newPassword.value,this.f.repeatNewPassword.value).subscribe((result)=>
    {
      this.toastr.success('Success', 'Your Password Was Changed');
      console.log('Create New Password')
      this.router.navigateByUrl("login");
      this.loading=false


    },(err)=>{
      this.toastr.error('Failed', 'Your Password Not Changed');
      this.loading=false;


    })

  }
}
