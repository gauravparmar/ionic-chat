webpackJsonp([0],{

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.username = "";
        var timestamp = Date.now();
        console.log('timestamp : ' + timestamp);
        // let datetime=new Date(1515137660000);
        var datetime = new Date(timestamp);
        console.log('datetime : ' + datetime.toLocaleString());
    }
    HomePage.prototype.alert = function (alertTitle, alertMsg) {
        var alert = this.alertCtrl.create({
            title: alertTitle,
            subTitle: alertMsg,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.loginUser = function () {
        if (/^[a-zA-Z0-9]+$/.test(this.username)) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
                username: this.username
            });
        }
        else {
            this.alert('Error', 'Invalid username');
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\github\ionic-chat\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      ChatApp\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!-- <p>Enter your username</p> -->\n	<ion-item>\n		<ion-label floating>Name</ion-label>\n		<ion-input type="text" [(ngModel)]="username"></ion-input>\n	</ion-item>\n	<button ion-button block (click)="loginUser()">Enter</button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Developed By : Gaurav Parmar</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\github\ionic-chat\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';

// import  'rxjs/add/operator/switchMap';
// export interface Item { username: string, message: string }
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, db, afm, afDB, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afm = afm;
        this.afDB = afDB;
        this.loadingCtrl = loadingCtrl;
        // showSpinner: boolean = true;
        this.username = "";
        this.message = "";
        // setMyClasses(user) {
        // 	let classes = {
        // 	  floatLeft:!this.username==user,
        // 	  floatRight:this.username==user,
        // 	};
        // 	return classes;
        // }
        this.loaderState = true;
        this.loading = this.loadingCtrl.create({
            content: 'Loading messages...'
        });
        this.username = this.navParams.data.username;
        this.itemsRef = afDB.list('chats');
        this.items = afDB.list('chats').valueChanges();
        this.items.subscribe(function (res) {
            if (_this.loaderState == true)
                _this.dismissLoader();
        });
        console.log('constructor loaded');
        this.showLoader();
        // this.scrollToBottom();
    }
    ChatPage.prototype.showLoader = function () {
        this.loaderState = true;
        this.loading.present();
    };
    ChatPage.prototype.dismissLoader = function () {
        this.loading.dismiss();
        this.loaderState = false;
        this.scrollToBottom('dismissLoader');
    };
    ChatPage.prototype.sendMessage = function () {
        console.log('Sending msg');
        if (this.message != "") {
            this.afDB.list('chats').push({
                username: this.username,
                message: this.message,
                joined: false,
                left: false,
                datetime: this.getCurrentTimeStamp()
            });
        }
        this.message = "";
        this.scrollToBottom('sendMessage');
    };
    ChatPage.prototype.eventHandler = function (keyCode) {
        console.log('eventHandler Sending msg');
        if (keyCode == 13) {
            this.afDB.list('chats').push({
                username: this.username,
                message: this.message,
                joined: false,
                left: false,
                datetime: this.getCurrentTimeStamp()
            });
            this.message = "";
            this.scrollToBottom('eventHandler');
        }
    };
    //scrolls to bottom whenever the page has loaded
    ChatPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter ChatPage');
        // console.log('ionViewDidEnter ChatPage exit');
        // this.scrollToBottom();
        // this.scrollToBottom();
    };
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
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
        // this.scrollToBottom();
        this.afDB.list('chats').push({
            username: this.username,
            message: "",
            joined: true,
            left: false,
            datetime: this.getCurrentTimeStamp()
        });
        // setTimeout(() => {
        // 	this.content.scrollToBottom();
        // }, 300);
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        this.afDB.list('chats').push({
            username: this.username,
            message: "",
            joined: false,
            left: true,
            datetime: this.getCurrentTimeStamp()
        });
    };
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
    ChatPage.prototype.scrollToBottom = function (from) {
        var _this = this;
        console.log("from : " + from);
        console.log('scrollToBottom ChatPage');
        setTimeout(function () {
            _this.content.scrollToBottom();
        });
    };
    ChatPage.prototype.deleteAllMessages = function () {
        this.itemsRef.remove();
        this.afDB.list('chats').push({
            username: this.username,
            message: "",
            joined: true,
            left: false,
            datetime: this.getCurrentTimeStamp()
        });
    };
    ChatPage.prototype.getCurrentTimeStamp = function () {
        var datetime = Date.now();
        console.log('datetime : ' + datetime);
        return datetime;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\xampp\htdocs\github\ionic-chat\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Chats\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="deleteAllMessages()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- <loading-spinner *ngIf="showSpinner"></loading-spinner> -->\n<ion-content padding has-footer>\n  <div class="chatArea">\n    <div *ngFor="let item of items | async">\n      <div *ngIf="!item.joined && !item.left" [class]="username==item.username?\'chat floatRight\':\'chat floatLeft\'">\n          <div class="chatUsername">{{item.username}}</div>\n          <div class="chatMessage">{{item.message}}</div>\n          <div class="chatDateTime">{{item.datetime | date:\'dd-MM-yy hh:mm a\'}}</div>\n          <!-- <ion-datetime displayFormat="MM/DD/YYYY"  class="chatDateTime">{{item.datetime}}</ion-datetime> -->\n      </div>\n      <!-- <div class="userChatStatus" *ngIf="item.joined"><span>{{item.username}} joined at {{item.datetime | date:\'dd-MM-yy hh:mm a\'}}</span></div>\n      <div class="userChatStatus" *ngIf="item.left"><span>{{item.username}} left at {{item.datetime | date:\'dd-MM-yy hh:mm a\'}}</span></div> -->\n    </div>\n  </div>\n  <ion-label id="myLabel">&nbsp;</ion-label>\n</ion-content>\n\n\n<ion-footer>\n  <div id="messagebox">\n    <!-- <ion-list> -->\n        <ion-item>\n          <!-- <ion-label  >Enter message here..</ion-label> -->\n          <ion-input [(ngModel)]="message" placeholder="Enter message here.." (keypress)="eventHandler($event.keyCode)"></ion-input>\n          <!-- <ion-input [(ngModel)]="message" placeholder="Enter message here.." ></ion-input> -->\n        </ion-item>\n      <!-- </ion-list> -->\n    <!-- <ion-toolbar>\n      <ion-label color="primary" floating>Enter message here...</ion-label>\n      <ion-input [(ngModel)]="message"></ion-input>  \n    </ion-toolbar> -->\n    <button type="button" ion-button (click)="sendMessage()"><ion-icon name="send"></ion-icon></button>\n  </div>\n</ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\github\ionic-chat\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestoreModule */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { HttpClientModule, HttpClient } from '@angular/common/http';



// import { FirebaseProvider } from '../providers/firebase/firebase';
var config = {
    apiKey: "AIzaSyAQ3I72oIPPSxRStWERPGUSazJni1-NvrM",
    authDomain: "ionic-chat-92eb7.firebaseapp.com",
    databaseURL: "https://ionic-chat-92eb7.firebaseio.com",
    projectId: "ionic-chat-92eb7",
    storageBucket: "ionic-chat-92eb7.appspot.com",
    messagingSenderId: "442458827575"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Testing
// import { ChatPage } from '../pages/chat/chat';
var MyApp = (function () {
    // rootPage:any = ChatPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\github\ionic-chat\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\github\ionic-chat\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[337]);
//# sourceMappingURL=main.js.map