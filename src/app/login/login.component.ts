import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

//import { AlertService, AuthenticationService } from 'src/app/_services';
import { AlertService } from '../_services';
import { LoginService } from '../services/login.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { ToastrService } from 'ngx-toastr';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private alertService: AlertService,
         private customValidator: CustomvalidationService,
         private toastr: ToastrService
    ) {
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(this.customValidator.getEmailPattern())])],
            password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        });

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading=true;
        this.loginService.logIn(this.f.email.value, this.f.password.value).pipe(first()).subscribe(
            data => {
                localStorage.setItem("iMakerBotEmail",this.f.email.value);
                this.toastr.success("Login in Succefuly","Success")
                console.log(data.headers.get("Authorazation"));
                localStorage.setItem("Token",data.headers.get("Authorization"));
                this.alertService.success('Login successful', true);
                this.router.navigate(['/cree-chatbot']);
                

            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}
