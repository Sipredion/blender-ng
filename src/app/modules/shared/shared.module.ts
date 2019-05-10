import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDirective} from './directives/button.directive';
import { HomePageModelComponent } from './components/home-page-model/home-page-model.component';

@NgModule({
  declarations: [
    // Components
    HomePageModelComponent,

    // Directives
    ButtonDirective,

    // Pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageModelComponent,
    ButtonDirective,
  ]
})
export class SharedModule {
}
