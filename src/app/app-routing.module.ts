// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: "", component: AppComponent, children: [
  { path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
