﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

import './_content/app.less';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    imageSrc = 'src/assets/images.jpg';
    tableName = 'Table Test';
    headers = ["A","B","C"];
    dataRows = [
        {
            "A":"1",
            "B":"qwerty",
            "C":"End",

        },
        {
            "A":"1",
            "B":"qwerty",
            "C":"End",
        },
        {
            "A":"1",
            "B":"qwerty",
            "C":"End",
        },
        {
            "A":"1",
            "B":"qwerty",
            "C":"End",
        },
        {
            "A":"1",
            "B":"qwerty",
            "C":"End",
        }
    ];

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        console.log(this.currentUser);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}