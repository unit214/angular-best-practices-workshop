import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerLayoutRoutingModule } from './container-layout-routing.module';
import { ContainerLayoutComponent } from './container-layout.component';
import { HeadingComponent } from '../shared/components/heading/heading.component';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
  declarations: [
    ContainerLayoutComponent,
    HeadingComponent,
    InputComponent,
    ButtonComponent,
    LoginComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    ContainerLayoutRoutingModule
  ]
})
export class ContainerLayoutModule { }
