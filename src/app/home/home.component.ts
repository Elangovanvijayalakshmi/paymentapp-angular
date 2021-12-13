import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';
import { FormGroup } from '@angular/forms';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    registerForm: FormGroup;
    cUser : JSON;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        console.log( this.currentUser);
    }

    ngOnInit() {
       // this.loadAllUsers();
       this.users.push(this.currentUser);
       this.cUser = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.cUser["name"]);
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}