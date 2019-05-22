import {Component, OnInit} from '@angular/core';
import {FrontPageService} from '../../services/front-page.service';
import {ActionRowItem} from '../../models/action-row-item.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  actionRowItems: Array<ActionRowItem> = [];
  actionRowSubscription: Subscription;

  constructor(private frontPageService: FrontPageService) {
  }

  ngOnInit() {
    this.actionRowSubscription = this.frontPageService.getActionRowItems().subscribe(items => {
      this.actionRowItems = items;
    });
  }

}
