import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the Mydata provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

@Injectable()
export class Mydata {
    Mydata: any = [];
    currentUser: User;
    data: any;
    constructor(public http: Http) {
        this.Mydata = null;
    }

    searchMovies() {
        var url = 'http://www.umastery.com/Mentor/JsonloadMentor';
        var response = this.http.get(url).map(res => res.json()).subscribe(Mydata => {
            this.Mydata = Mydata
            console.log(this.Mydata);
        });
        return response;
    }

    searchMovies2() {
        var url = 'http://www.umastery.com/Mentor/JsonloadMentor';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    

    public login(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
        
//       var url = '192.168.0.101:2021/webservices/authenticationLogin?username=' + credentials.email + '&password=' +  credentials.password;
//       var response = this.http.get(url).map(res => res.json());
//        //return response;
////        console.log(JSON.stringify(response));
//console.log(this.data);

            return Observable.create(observer => {
                // At this point make a request to your backend to make a real check!             
                let access = (credentials.password === "pass" && credentials.email === "email");
                this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();                
            });
        }
    }

    public register(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            // At this point store the credentials to your backend!
            return Observable.create(observer => {
                observer.next(true);
                observer.complete();
            });
        }
    }

    public getUserInfo(): User {
        return this.currentUser;
    }

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }
}
