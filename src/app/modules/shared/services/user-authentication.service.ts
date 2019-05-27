import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  public async signIn(email: string, password: string): Promise<any> {
    try {
      return await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  }

  public async signOut() {
    try {
      return await this.fireAuth.auth.signOut();
    } catch (e) {
      console.log(e);
    }
  }

}
