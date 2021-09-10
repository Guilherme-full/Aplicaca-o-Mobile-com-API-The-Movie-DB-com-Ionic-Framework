import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpressoPageRoutingModule } from './expresso-routing.module';

import { ExpressoPage } from './expresso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpressoPageRoutingModule
  ],
  declarations: [ExpressoPage]
})
export class ExpressoPageModule {}
