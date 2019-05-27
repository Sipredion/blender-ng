import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new BehaviorSubject<UserModel>(null);

  userDoc: AngularFirestoreDocument<UserModel>;

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  get userId() {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }

  _isAuthenticated: boolean;
  _userId: string;

  constructor(private fireDb: AngularFirestore) {
  }

  getCurrentUser(): Observable<UserModel> {
    if (this.userId) {
      console.log('userId', this.userId);
      this.userDoc = this.fireDb.doc<UserModel>(`user/${this.userId}`);
      this.userDoc.valueChanges().subscribe(user => {
        this.currentUser.next(user);
      });
      return this.currentUser.asObservable();
    }
  }
}
