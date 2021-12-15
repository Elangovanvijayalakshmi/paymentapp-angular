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
    cUser: JSON;
    users = [];
    tableName;
    headers;
    dataRows;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        console.log(this.currentUser);
    }

    ngOnInit() {
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

    setTableNull() {
        this.dataRows = null;
        this.tableName = null;
        this.headers = null;
    }

    showbalance() {
        this.authenticationService.showbalance().pipe(first()).subscribe(
            x => {
                this.dataRows = x;
                this.tableName = 'Wallet details';
                this.headers = [
                    { title: "Wallet ID", data: "walletid" },
                    { title: "Balance Amount", data: "balance" }];
            });
    }
    listbene() {

        this.authenticationService.listbene().pipe(first()).subscribe(
            x => {
                this.dataRows = x;
                this.tableName = 'Beneficiary Details';
                this.headers = [
                    { title: "Customer ID", data: "custid" },
                    { title: "Customer Name", data: "name" },
                    { title: "Mobile Number", data: "mobilenumber" },
                    { title: "Account Number", data: "accountno" },
                    { title: "Beneficiary ID", data: "bid" }
                ];
            });
    }
    getbankaccount() {

        this.authenticationService.getbankaccount().pipe(first()).subscribe(
            x => {
                this.dataRows = x;
                this.tableName = 'Bank Account Info';
                this.headers = [
                    { title: "Customer ID", data: "customer_id" },
                    { title: "Account Number", data: "accountno" },
                    { title: "Bank Name", data: "bankname" },
                    { title: "Ifsc Code", data: "ifsccode" },
                    { title: "Balance ", data: "balance" }];
            },
            error => {
                alert(error["error"]["message"]);
            console.log(error);
        });
    }
    gettransaction() {

        this.authenticationService.gettransaction().pipe(first()).subscribe(
            x => {
                this.dataRows = x;
                this.tableName = "Transaction details";
                this.headers = [

                    { title: "Transaction ID", data: "transaction_id" },
                    { title: "Transaction Type", data: "transaction_type" },
                    { title: "Transaction Date", data: "transaction_date" },
                    { title: "Wallet ID", data: "wallet_id" },
                    { title: "Amount ", data: "amount" },
                    { title: "Description ", data: "description" }];

            }
        )
    }
    getbilldetails(){
        // this.authenticationService.getbilldetails().pipe(first()).subscribe(
        //     x=>{
        //         this.dataRows=x;
        //         this.tableName="Bill details";
        //         this.headers=[
        //             {title:}

        //         ]
        //     }
    }

}
