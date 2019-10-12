import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConditionGeneralPage } from './condition-general.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionGeneralPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConditionGeneralPage]
})
export class ConditionGeneralPageModule {}
