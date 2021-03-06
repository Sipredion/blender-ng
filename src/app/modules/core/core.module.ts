import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
