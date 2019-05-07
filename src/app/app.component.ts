import {Component, OnInit} from '@angular/core';
import {UtilityService} from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.utilityService.checkScreenSize(window);
  }

  onWindowResize(event) {
    this.utilityService.checkScreenSize(event.target);
  }
}
