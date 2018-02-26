import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoPage } from './po';

@NgModule({
  declarations: [
    PoPage,
  ],
  imports: [
    IonicPageModule.forChild(PoPage),
  ],
})
export class PoPageModule {}
