import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  screenSizeSrc = new BehaviorSubject<string>('');
  screenSize$ = this.screenSizeSrc.asObservable();

  constructor() {
  }

  checkScreenSize(window: Window) {
    const width = window.innerWidth;

    switch (true) {
      case width <= 768:
        this.screenSizeSrc.next('mobile');
        break;
      case width >= 769 && width <= 1023:
        this.screenSizeSrc.next('tablet');
        break;
      case width >= 2014 && width <= 1215:
        this.screenSizeSrc.next('desktop');
        break;
      case width >= 1216 && width <= 1407:
        this.screenSizeSrc.next('wideScreen');
        break;
      case width >= 1408:
        this.screenSizeSrc.next('fullHd');
        break;
      default:
        this.screenSizeSrc.next('unknown');
        break;
    }

  }
}
