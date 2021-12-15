import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public cuser:User;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.cuser;
    }

    login(username, password) {
        let payload = {
            "mobile":username,
	        "password":password
        }
        return this.http.post<any>(`${config.apiUrl}/app/signin`, payload)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(localStorage);
                this.currentUserSubject.next(user);
                this.cuser = user;
                return user;
            }));
    }
    

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.cuser= null;
    }

    showbalance() {
        // let payload = {
        //     "walletid":JSON.parse(localStorage.getItem("currentUser"))["wallet_id"]
        // }
        let wallet_id = JSON.parse(localStorage.getItem("currentUser"))["wallet_id"];
        return this.http.get<any>(`${config.apiUrl}/app/wallet/getbycustomerid/${wallet_id}`);
    }
    listbene(){
        let custid = JSON.parse(localStorage.getItem("currentUser"))["custid"];
        return this.http.get<any>(`${config.apiUrl}/app/beneficiary/getbycustomerid/${custid}`);
    }
    getbankaccount(){
        let custid = JSON.parse(localStorage.getItem("currentUser"))["custid"];
        return this.http.get<any>(`${config.apiUrl}/app/bankaccount/getbycustomer/${custid}`);
    }
    gettransaction(){
        let custid = JSON.parse(localStorage.getItem("currentUser"))["custid"];
        return this.http.get<any>(`${config.apiUrl}/app/transaction/getTransactionbycustomerid/${custid}`);

    }
}