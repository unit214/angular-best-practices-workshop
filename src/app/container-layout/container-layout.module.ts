import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerLayoutRoutingModule } from './container-layout-routing.module';
import { ContainerLayoutComponent } from './container-layout.component';


@NgModule({
  declarations: [
    ContainerLayoutComponent,
  ],
  imports: [
    CommonModule,
    ContainerLayoutRoutingModule
  ]
})
export class ContainerLayoutModule { }
