import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { PortlandComponent }           from './portland.component';
import { PortlandRoutingModule }       from './portland-routing.module';
import { MapModule } from '../map/map.module';
import { SlidersModule } from '../sliders/sliders.module';


@NgModule({
  imports: [
    CommonModule,
    PortlandRoutingModule,
    MapModule,
    SlidersModule
  ],
  exports: [
      PortlandComponent
      
  ],
  declarations: [
    PortlandComponent
  ]
})
export class PortlandModule {}
