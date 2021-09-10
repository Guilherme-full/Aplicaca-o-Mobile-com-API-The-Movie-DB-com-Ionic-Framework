import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpressoPage } from './expresso.page';

const routes: Routes = [
  {
    path: '',
    component: ExpressoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpressoPageRoutingModule {}
