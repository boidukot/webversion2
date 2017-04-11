import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataUtility provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataUtility {
    data: any = [];
  constructor(public http: Http) {
   // console.log('Hello DataUtility Provider');
      this.data = null;
  }

  load() {
      //this.http.get('192.168.0.101:2021/webservices/authenticationLogin?username=boidukot&password=mississippi')
      //var url = '192.168.0.101:2021/webservices/authenticationLogin?username=boidukot&password=mississippi';
      //return this.http.get(url)
      //    .map(res => res.json());       
      
      var url = 'http://192.168.0.101:2021/webservices/authenticationLogin?username=boidukot&password=mississippi';
      var response1 = this.http.get(url).map(res => res.json());
      return response1;
  }

}
