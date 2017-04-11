import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Mydata } from '../../providers/data';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { DataUtility } from '../../providers/data-utility';
import 'rxjs/Rx'; 
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    loading: Loading;
    registerCredentials = { email: '', password: '' };
    movie: any;
    constructor(private nav: NavController, private auth: Mydata,private util:DataUtility, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

    public createAccount() {
        this.nav.push(RegisterPage);
    }
    ngOnInit() {                
        this.util.load().subscribe(response1 => {
        this.movie = response1.children;
            console.log(this.movie);
        });        
        
        //console.log(this.util.data["Username"]);
        //.subscribe(response => { this.movie = response; });        
        //console.log(this.movie); s
    }

    public login() {
        this.showLoading()
        this.auth.login(this.registerCredentials).subscribe(allowed => {
            if (allowed) {
                setTimeout(() => {
                    this.loading.dismiss();
                    this.nav.setRoot(HomePage)
                });
            } else {
                this.showError("Access Denied");
            }
        },
            error => {
                this.showError(error);
            });
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    }

    showError(text) {
        setTimeout(() => {
            this.loading.dismiss();
        });

        let alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    }
}