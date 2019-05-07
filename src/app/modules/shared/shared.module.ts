import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDirective} from './directives/button.directive';

@NgModule({
  declarations: [
    // Components

    // Directives
    ButtonDirective

    // Pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective
  ]
})
export class SharedModule {
}
