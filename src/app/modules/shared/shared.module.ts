import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDirective} from './directives/button.directive';
import { HomePageModelComponent } from './components/home-page-model/home-page-model.component';
import {UserAuthenticationService} from './services/user-authentication.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FakeQuestionPipe } from './pipes/fake-question.pipe';
import { RandomColorPipe } from './pipes/random-color.pipe';

@NgModule({
  declarations: [
    // Components
    HomePageModelComponent,
    SignInComponent,

    // Directives
    ButtonDirective,

    SpinnerComponent,

    FakeQuestionPipe,

    RandomColorPipe,

    // Pipes
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePageModelComponent,
    SignInComponent,
    ButtonDirective,
    FakeQuestionPipe,
    RandomColorPipe,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [UserAuthenticationService]
    };
  }
}
