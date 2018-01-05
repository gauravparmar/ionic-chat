import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,Content, LoadingController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreModule  } from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
// import  'rxjs/add/operator/switchMap';

// export interface Item { username: string, message: string }

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
	@ViewChild(Content) content: any;
	
	// showSpinner: boolean = true;

	username:string ="";
	message:string ="";
	items: Observable<any[]>;
	itemsRef: AngularFireList<any>;

	// setMyClasses(user) {
	// 	let classes = {
	// 	  floatLeft:!this.username==user,
	// 	  floatRight:this.username==user,
	// 	};
	// 	return classes;
	// }


	loaderState:boolean = true;
	loading = this.loadingCtrl.create({
		content: 'Loading messages...'
	});
	

	constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore, public afm : AngularFirestoreModule, public afDB: AngularFireDatabase,public loadingCtrl: LoadingController) {
		this.username=this.navParams.data.username;
		this.itemsRef = afDB.list('chats');
		this.items=afDB.list('chats').valueChanges();
		this.items.subscribe(res=>{
									if(this.loaderState == true) 
										this.dismissLoader();
								  }
							);
		console.log('constructor loaded');
		this.showLoader();
		// this.scrollToBottom();

		
		

	}

	showLoader() {
		this.loaderState = true;
		this.loading.present();
		
	}

	dismissLoader(){
		this.loading.dismiss();
		this.loaderState = false;
		this.scrollToBottom('dismissLoader');
	}

	sendMessage(){
		console.log('Sending msg');
		
		if(this.message!=""){
			this.afDB.list('chats').push({
				username:this.username,
				message:this.message,
				joined:false,
				left:false,
				datetime:this.getCurrentTimeStamp()		
			});
		}


		this.message="";

		this.scrollToBottom('sendMessage');
	}
	eventHandler(keyCode){
		console.log('eventHandler Sending msg');
		
		if(keyCode==13){
			this.afDB.list('chats').push({
				username:this.username,
				message:this.message,
				joined:false,
				left:false,
				datetime:this.getCurrentTimeStamp()		
			});
	
			this.message="";
	
			this.scrollToBottom('eventHandler');
		}
	   
	}
	//scrolls to bottom whenever the page has loaded
	ionViewDidEnter(){
		console.log('ionViewDidEnter ChatPage');
		
		// console.log('ionViewDidEnter ChatPage exit');
		// this.scrollToBottom();
		// this.scrollToBottom();
	}

	

	// ionViewDidEnter() {
	// 	console.log('ionViewDidEnter ChatPage');
	// 	// // this.content.scrollToBottom();

	// 	// var element = document.getElementById("myLabel");
	// 	// // I can't remember why I added a short timeout, 
	// 	// // but you might be able to use ngzone instead.
	// 	// // the below works great though. 
	// 	// console.log(element);
	// 	// element.scrollIntoView(true);
	// 	// setTimeout(()=>{element.scrollIntoView(true)},200);

	// 	this.afDB.list('chats').push({
	// 		username:this.username,
	// 		message:"",
	// 		joined:true,
	// 		left:false		
	// 	});
	// 	this.content.scrollToBottom();
	// 	// setTimeout(() => {
	// 	// 	this.content.scrollToBottom();
	// 	// }, 300);
	// }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ChatPage');
		// this.scrollToBottom();
		this.afDB.list('chats').push({
			username:this.username,
			message:"",
			joined:true,
			left:false,
			datetime:this.getCurrentTimeStamp()		
		});

		// setTimeout(() => {
		// 	this.content.scrollToBottom();
		// }, 300);
	}

	ionViewWillLeave(){
		this.afDB.list('chats').push({
			username:this.username,
			message:"",
			joined:false,
			left:true,
			datetime:this.getCurrentTimeStamp()	
		});	
	}

	// scrollto() {
	// 	console.log('scrollto ChatPage');
	// 	setTimeout(() => {
	// 		this.content.scrollToBottom(1000);
	// 	}, 300);

	// 	// var element = document.getElementById("myLabel");
	// 	// // I can't remember why I added a short timeout, 
	// 	// // but you might be able to use ngzone instead.
	// 	// // the below works great though. 
	// 	// setTimeout(()=>{element.scrollIntoView(true)},200);
	// }

	scrollToBottom(from) {
		console.log("from : "+from);
		console.log('scrollToBottom ChatPage');
        setTimeout(() => {
            this.content.scrollToBottom();
        });
    }

	deleteAllMessages() {
		this.itemsRef.remove();

		this.afDB.list('chats').push({
			username:this.username,
			message:"",
			joined:true,
			left:false,
			datetime:this.getCurrentTimeStamp()		
		});
	}

	getCurrentTimeStamp(){
		let datetime=Date.now();
		console.log('datetime : '+datetime);
		return datetime;
	}
	
	
}
