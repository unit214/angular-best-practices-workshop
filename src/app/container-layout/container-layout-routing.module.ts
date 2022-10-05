import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLayoutComponent } from './container-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerLayoutRoutingModule { }
