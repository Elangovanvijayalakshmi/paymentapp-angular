import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(user: User) {
        console.log(user);
        let payload = {
            "name":user["Name"],
            "mobile":user["Mobile"],
            "password":user["Password"],
            "ifsccode":user["Ifsccode"],
            "accountno":user["Accountno"],
            "bankName":user["Bankname"],
            "balance":user["Balance"]
        }
        return this.http.post(`${config.apiUrl}/app/signup`, payload);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}