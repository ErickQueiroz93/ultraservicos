import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdensPage } from './ordens';

@NgModule({
  declarations: [
    OrdensPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdensPage),
  ],
})
export class OrdensPageModule {}
