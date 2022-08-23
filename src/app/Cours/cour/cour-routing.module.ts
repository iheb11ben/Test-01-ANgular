import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourComponent } from './cour.component';

const routes: Routes = [
  {path:'',component:CourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourRoutingModule { }
