import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {ChatPage} from '../chat/chat';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	username:string ="";

	constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
		let timestamp=Date.now();
		console.log('timestamp : '+timestamp);

		// let datetime=new Date(1515137660000);
		let datetime=new Date(timestamp);

		console.log('datetime : '+datetime.toLocaleString());
	}

	alert(alertTitle:string,alertMsg:string){
		let alert = this.alertCtrl.create({
	      title: alertTitle,
	      subTitle: alertMsg,
	      buttons: ['OK']
	    });
	    alert.present();
	}

	loginUser(){
		if(/^[a-zA-Z0-9]+$/.test(this.username)){
			this.navCtrl.push(ChatPage,{
				username:this.username
			});
		}else{
			this.alert('Error','Invalid username');
		}
	}
}
