import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhamentoPage } from './detalhamento';

@NgModule({
  declarations: [
    DetalhamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhamentoPage),
  ],
})
export class DetalhamentoPageModule {}
