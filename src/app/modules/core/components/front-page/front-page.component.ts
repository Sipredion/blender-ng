import {Component, OnInit} from '@angular/core';
import {FrontPageService} from '../../services/front-page.service';
import {ActionRowItem} from '../../models/action-row-item.model';
import {Subscription} from 'rxjs';
import {UserService} from '../../../admin/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  actionRowItems: Array<ActionRowItem> = [];
  actionRowSubscription: Subscription;

  isOpen: boolean;
  secret: {
    one: boolean,
    two: boolean,
    three: boolean,
    four: boolean
  };
  isUser: boolean;
  count = 0;
  paperTrail: boolean;

  constructor(private frontPageService: FrontPageService,
              private router: Router) {
  }

  ngOnInit() {
    this.actionRowSubscription = this.frontPageService.getActionRowItems().subscribe(items => {
      this.actionRowItems = items;
    });
  }

  openSignIn(secret: { one, two, three, four }) {
    this.count = 0;
    const values = Object.values(secret);
    Promise.resolve(values.forEach(value => {
      value ? this.count++ : this.count = 0;
    })).then(() => {
      if (this.count === (values.length)) {
        this.isOpen = true;
        this.isUser = true;
      } else {
        this.throwSecretError();
      }
      this.count = 0;
      this.secret = null;
    });
  }

  handleModalClose(isLogin: boolean) {
    if (isLogin) {
      // Route To dashboard.
    }
    this.isOpen = false;
  }

  determineSecret(secret: string) {
    if (!this.secret) {
      this.secret = {one: false, two: false, three: false, four: false};
    }
    if (!this.hasTried()) {
      this.count += 1;
      switch (secret) {
        case 'one':
          console.log('Secret!');
          if (!this.secret.one) {
            this.secret.one = true;
          }
          if (this.count === 4) {
            this.openSignIn(this.secret);
          }
          break;
        case 'two':
          console.log('Secret!');
          if (this.secret.one) {
            this.secret.two = true;
          }
          if (this.count === 4) {
            this.openSignIn(this.secret);
          }
          break;
        case 'three':
          console.log('Secret!');
          if (this.secret.one && this.secret.two) {
            this.secret.three = true;
          }
          if (this.count === 4) {
            this.openSignIn(this.secret);
          }
          break;
        case 'four':
          console.log('Secret!');
          if (this.secret.one && this.secret.two && this.secret.three) {
            this.secret.four = true;
          }
          if (this.count === 4) {
            this.openSignIn(this.secret);
          }
          break;
      }
    }
  }

  throwSecretError() {
    // secret error
    this.isUser = false;
    this.paperTrail = true;
    this.isOpen = true;
  }

  hasTried(): boolean {
    return this.isUser === false;
  }
}
