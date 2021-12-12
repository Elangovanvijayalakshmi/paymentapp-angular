import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    )
    
    {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name:['',Validators.required],
            Mobile : ['', Validators.required],
            Password: ['',[Validators.required, Validators.minLength(6)]],
            Ifsccode:['',Validators.required],
            Accountno: ['', Validators.required],
            Bankname: ['',Validators.required],
            Balance: ['',  Validators.required]
        });
        localStorage.setItem('currentUser', null);
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {

        this.loading = true;

        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    alert("Registration successful");
                    this.router.navigate(['/login']);
                },
                error => {
                    alert(error["error"]);
                    this.loading = false;
                    this.submitted = false;
                    this.registerForm.reset;
                });
                
    }
}
