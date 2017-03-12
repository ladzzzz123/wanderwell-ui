import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SeattleComponent }           from './seattle.component';
import { SeattleRoutingModule }       from './seattle-routing.module';
import { MapModule } from '../map/map.module';
import { SlidersModule } from '../sliders/sliders.module';


@NgModule({
  imports: [
    CommonModule,
    SeattleRoutingModule,
    MapModule,
    SlidersModule
  ],
  exports: [
      SeattleComponent
      
  ],
  declarations: [
    SeattleComponent
  ]
})
export class SeattleModule {}
