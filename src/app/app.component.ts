import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'questions';
  items: Observable<any[]>;
  provider = new firebase.auth.GoogleAuthProvider()
  constructor(
    firestore: AngularFirestore,
    public auth: AngularFireAuth
    ) {
    this.items = firestore.collection('questions').valueChanges();
  }

  login() {
    this.auth.signInWithPopup(this.provider);
  }

  logout() {
    this.auth.signOut();
  }
}
