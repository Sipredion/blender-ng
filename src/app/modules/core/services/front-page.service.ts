import {Injectable} from '@angular/core';
import {ActionRowItem} from '../models/action-row-item.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontPageService {

  actionRowItemsSrc = new BehaviorSubject<Array<ActionRowItem>>([
    {type: 'regular', href: 'https://instagram.com', title: 'Instagram'},
    {type: 'github', href: 'https://github.com', title: 'Github'},
    {type: 'artStation', href: 'https://artstation.com', title: 'ArtStation'},
  ]);

  constructor() {
  }

  getActionRowItems(): Observable<Array<ActionRowItem>> {
    return this.actionRowItemsSrc.asObservable();
  }

  setActionRowItem(item: ActionRowItem) {
    const values = {...this.actionRowItemsSrc.value, item};
    this.actionRowItemsSrc.next(values);
  }
}
