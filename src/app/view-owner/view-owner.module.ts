import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOwnerPageRoutingModule } from './view-owner-routing.module';

import { ViewOwnerPage } from './view-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOwnerPageRoutingModule
  ],
  declarations: [ViewOwnerPage]
})
export class ViewOwnerPageModule {}
