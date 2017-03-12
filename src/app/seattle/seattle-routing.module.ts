
import { SeattleComponent }           from './seattle.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const seattleRoutes: Routes = [
  { path: '',  component: SeattleComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(seattleRoutes)
  ],
  exports: [ 
    RouterModule
  ]
})
export class SeattleRoutingModule { }
