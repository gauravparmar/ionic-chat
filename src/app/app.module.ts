import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule} from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
// import { FirebaseProvider } from '../providers/firebase/firebase';

var config = {
  apiKey: "AIzaSyAQ3I72oIPPSxRStWERPGUSazJni1-NvrM",
  authDomain: "ionic-chat-92eb7.firebaseapp.com",
  databaseURL: "https://ionic-chat-92eb7.firebaseio.com",
  projectId: "ionic-chat-92eb7",
  storageBucket: "ionic-chat-92eb7.appspot.com",
  messagingSenderId: "442458827575"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    // AngularFireDatabaseModule,
    // HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // FirebaseProvider,
    // HttpClientModule
  ]
})
export class AppModule {}
