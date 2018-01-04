import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreModule  } from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/switchMap';

export interface Item { username: string, message: string }

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
	selector: 'page-chat',
	templateUrl: 'chat.html',
})

export class ChatPage {
	username:string ="";
	message:string ="";
	items: Observable<any[]>;
	setMyClasses(user) {
		let classes = {
		  floatLeft:!this.username==user,
		  floatRight:this.username==user,
		};
		return classes;
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore, public afm : AngularFirestoreModule, public afDB: AngularFireDatabase) {
		this.username=this.navParams.data.username;
		this.items=afDB.list('chats').valueChanges();
	}

	sendMessage(){
		// console.log('Sending msg');
		
	    this.afDB.list('chats').push({
			username:this.username,
			message:this.message,
			joined:false	
		});

		this.message="";
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ChatPage');

		this.afDB.list('chats').push({
			username:this.username,
			message:"",
			joined:true	
		});
	}

	
}
