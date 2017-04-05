import { Component } from '@angular/core';
import { Mydata } from '../../providers/data';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    username = '';
    email = '';
    constructor(public navCtrl: NavController, private auth: Mydata) {
        let info = this.auth.getUserInfo();
        this.username = info.name;
        this.email = info.email;
    }
    public logout() {
        this.auth.logout().subscribe(succ => {
            this.navCtrl.setRoot(LoginPage)
        });
    }

}
