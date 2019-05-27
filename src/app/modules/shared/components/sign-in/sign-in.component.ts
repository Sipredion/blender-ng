import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAuthenticationService} from '../../services/user-authentication.service';
import UserCredential = firebase.auth.UserCredential;
import {UserService} from '../../../admin/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();
  loginForm: FormGroup;
  showPassword: boolean;
  isLoading: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: UserAuthenticationService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [undefined, Validators.compose([Validators.email, Validators.required])],
      password: [undefined, Validators.required],
    });
  }

  authenticate({email, password}) {
    this.isLoading = true;
    this.authService.signIn(email, password).then((credentials: UserCredential) => {
      this.isLoading = false;
      // REFACTOR: put the following two calls into one single call. (Remove getter and setter)
      this.userService.userId = credentials.user.uid;
      this.userService.getCurrentUser();
      this.close.emit(true);
    });
  }

  cancelLogin() {
    this.close.emit();
  }

}
