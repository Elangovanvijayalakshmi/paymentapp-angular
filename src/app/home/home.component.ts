import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from '@/login';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    registerForm: FormGroup;
    cUser : JSON;
    users = [];
    imageSrc = 'src/assets/images.jpg';
    beneImgSrc = 'src/assets/bene.png';
    billIngSrc = 'src/assets/bill.png';
    transSrc = 'src/assets/trans.png';
    wallSrc = 'src/assets/wal.png';
    walletBal:any[]=[];
    beneficiary:any[]=[];
    bankaccount:any[]=[];
    transaction:any[]=[];
    ba = [];
    tableName;
    headers;
    dataRows;

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
    setTableNull(){
        this.dataRows=null;
        this.tableName = null;
        this.headers = null;
    }

    showbalance(){
        this.authenticationService.showbalance().pipe(first()).subscribe(
            x => {this.dataRows=x;
                this.tableName = 'Wallet details';
                this.headers = [
                    {title:"Wallet ID",data:"walletid"},
                    {title:"Balance Amount",data:"balance"}];
            });
    }
    listbene(){
       
        this.authenticationService.listbene().pipe(first()).subscribe(
            x =>{
                this.beneficiary=x;
                this.dataRows=x;
                this.tableName = 'Beneficiary Details';
                this.headers = [
                {title:"Customer ID",data:"custid"},
                {title:"Customer Name",data:"name"},
                {title:"Mobile Number",data:"mobilenumber"},
                {title:"Account Number",data:"accountno"},
                {title:"Beneficiary ID",data:"bid"}
            ];
            } );
    }
    getbankaccount(){
        
        this.authenticationService.getbankaccount().pipe(first()).subscribe(
            x=> {this.bankaccount=x;
            this.ba = this.bankaccount[1];
            this.dataRows=x;
            this.tableName = 'Bank Account Info';
            this.headers = ["customer_id","accountno","bankname","ifsccode","balance"];
            console.log(this.bankaccount);
        });
    }
    gettransaction(){
      
        this.authenticationService.gettransaction().pipe(first()).subscribe(
            x=>{this.transaction=x;
                this.dataRows=x;
                this.tableName="Transaction details";
                this.headers=["transaction_id","transaction_type","transaction_date","wallet_id","amount","description"];
                console.log(this.transaction);

              
       
            }
        )
    }

}
