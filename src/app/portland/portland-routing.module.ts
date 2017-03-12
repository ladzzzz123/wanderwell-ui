
import { PortlandComponent }           from './portland.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const portlandRoutes: Routes = [
  { path: '',  component: PortlandComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(portlandRoutes)
  ],
  exports: [ 
    RouterModule
  ]
})
export class PortlandRoutingModule { }
