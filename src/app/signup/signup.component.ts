import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from 'src/app/_services';
import { SignupService } from '../services/signup.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    

    registerForm: FormGroup;
    loading = false;
    submitted = false;
    message : any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private customValidator: CustomvalidationService,
        private signupService: SignupService,
        private alertService: AlertService,
        private toastr: ToastrService
    ) { 
        
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName:    ['', [Validators.required, Validators.minLength(4)]],
            phone:    ['', [Validators.required, Validators.minLength(8)]],
            companyEmployeesNumber:    ['', [Validators.required, Validators.minLength(1)]],
            email: ['', Validators.compose([Validators.required, Validators.pattern(this.customValidator.getEmailPattern())])],
            password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
            confirmPassword: ['', [Validators.required]],
        },
          {
            validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
          }
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

     onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading=true;
        this.signupService.Register(this.f.email.value,this.f.password.value,this.f.fullName.value,this.f.phone.value,this.f.companyEmployeesNumber.value)
        .pipe(first())
        .subscribe(
            data => {
                this.toastr.success("Registred Succefuly","Success")
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}
