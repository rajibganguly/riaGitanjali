import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOwnerPage } from './view-owner.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOwnerPageRoutingModule {}
