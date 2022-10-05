import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLayoutComponent } from './container-layout.component';
import { LoginComponent } from "./pages/login/login.component";
import { SuccessComponent } from "./pages/success/success.component";

const routes: Routes = [
  {
    path: '',
    component: ContainerLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'success', component: SuccessComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerLayoutRoutingModule { }
