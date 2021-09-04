import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  myProfile=true;
  Preferences:any;
  timezones=[
    "UTC	Universal Coordinated Time	GMT",
  "ECT	European Central Time	GMT+1:00",
  "EET	Eastern European Time	GMT+2:00",
  "ART	(Arabic) Egypt Standard Time	GMT+2:00",
  "EAT	Eastern African Time	GMT+3:00",
  "MET	Middle East Time	GMT+3:30",
  "NET	Near East Time	GMT+4:00",
  "PLT	Pakistan Lahore Time	GMT+5:00",
  "IST	India Standard Time	GMT+5:30",
  "BST	Bangladesh Standard Time	GMT+6:00",
  "VST	Vietnam Standard Time	GMT+7:00",
  "CTT	China Taiwan Time	GMT+8:00",
  "JST	Japan Standard Time	GMT+9:00",
  "ACT	Australia Central Time	GMT+9:30",
  "AET	Australia Eastern Time	GMT+10:00",
  "SST	Solomon Standard Time	GMT+11:00",
  "NST	New Zealand Standard Time	GMT+12:00",
  "MIT	Midway Islands Time	GMT-11:00",
  "HST	Hawaii Standard Time	GMT-10:00",
  "AST	Alaska Standard Time	GMT-9:00",
  "PST	Pacific Standard Time	GMT-8:00",
  "PNT	Phoenix Standard Time	GMT-7:00",
  "MST	Mountain Standard Time	GMT-7:00",
  "CST	Central Standard Time	GMT-6:00",
  "EST	Eastern Standard Time	GMT-5:00",
  "IET	Indiana Eastern Standard Time	GMT-5:00",
  "PRT	Puerto Rico and US Virgin Islands Time	GMT-4:00",
  "CNT	Canada Newfoundland Time	GMT-3:30",
  "AGT	Argentina Standard Time	GMT-3:00",
  "BET	Brazil Eastern Time	GMT-3:00",
  "CAT	Central African Time	GMT-1:00",
  ]
  email=localStorage.getItem("iMakerBotEmail")
  ResetForm!: FormGroup;
  AccountForm!: FormGroup ;
    loading!:boolean;
  
  password:string="";
    constructor(private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private toaster: ToastrService,
      private accountService:AccountService
      ) {
     
       }
  
    ngOnInit(): void {
      let formControl ={
        password : new FormControl('',[Validators.required , Validators.minLength(8),Validators.maxLength(20)]),
        newPassword : new FormControl('',[Validators.required , Validators.minLength(8),Validators.maxLength(20)]),
        repeatNewPassword : new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(20)])
      }
      let formControl2 ={
        CompanyWebsite : new FormControl('',[Validators.required ]),
        CompanyNumber : new FormControl('',[Validators.required ,Validators.maxLength(3)]),
        fullName : new FormControl('',[Validators.required,Validators.minLength(7) ]),
        phone : new FormControl('',[Validators.required ,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]),
        language : new FormControl('',[Validators.required ]),
        timeZone : new FormControl('',[Validators.required ])
      }
      this.AccountForm = this.formBuilder.group(formControl2);

      this.ResetForm = this.formBuilder.group(formControl);
    }  
    get f() { return this.ResetForm.controls;}
    get g() { return this.AccountForm.controls;}
    
  prof(){
    this.myProfile=true;
    this.Preferences=false;
  
  
  }
  pref(){
    this.Preferences=true;
    this.myProfile=false;
  }
  
  Reset(){
    console.log('hhh')
    this.accountService.ResetPassword(this.f.password.value,this.f.newPassword.value,this.f.repeatNewPassword.value).subscribe((result)=>{
      
      this.toaster.success("Password changed Succefuly","Success")
      
      this.router.navigateByUrl("/login")
console.log('true')
    },(err)=>{
      this.toaster.error("Password not changed","Error")
console.log('false')
    })
  
  }  
  UpdateAccount(){
    console.log('hhhhhhhhhhhhhhh')
   this.accountService.UpdateAccount(localStorage.getItem("iMakerBotEmail"),this.g.CompanyWebsite.value,this.g.CompanyNumber.value,this.g.phone.value,this.password,this.g.language.value,this.g.timeZone.value,this.g.fullName.value)
   .subscribe((result)=>{

    this.toaster.success("Account Changed Succesfuly","Success")
   
    localStorage.setItem("iMakerBotFullName",this.g.fullName.value);
    localStorage.setItem("iMakerBotPhone",this.g.phone.value);
    window.location.reload();

   
    
    
    
    
    console.log('true')
   
    window.location.reload();

   },(err)=>{
    
    this.toaster.error("Failed Changes","Error")

   })
    
    
  }

}
