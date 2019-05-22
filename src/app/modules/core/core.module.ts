import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FrontPageComponent} from './components/front-page/front-page.component';

@NgModule({
  declarations: [
    FrontPageComponent
  ],
  exports: [
    FrontPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule {
}
