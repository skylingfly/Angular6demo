import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    constructor(private http : Http) {}

    checkLogin() {
        return this.http
            .get(`../assets/testdata.json`)
            .map(res => res.json())
    }
}