import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerLayoutRoutingModule } from './container-layout-routing.module';
import { ContainerLayoutComponent } from './container-layout.component';
import { HeadingComponent } from "../shared/components/heading/heading.component";

@NgModule({
  declarations: [
    ContainerLayoutComponent,
    HeadingComponent,
  ],
  imports: [
    CommonModule,
    ContainerLayoutRoutingModule
  ]
})
export class ContainerLayoutModule { }
