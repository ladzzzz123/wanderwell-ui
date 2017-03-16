import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SeattleComponent }           from './seattle.component';
import { SeattleRoutingModule }       from './seattle-routing.module';
import { MapModule } from '../map/map.module';
import { D3MapModule } from '../d3-map/d3-map.module';
import { SlidersModule } from '../sliders/sliders.module';


@NgModule({
  imports: [
    CommonModule,
    SeattleRoutingModule,
    MapModule,
    D3MapModule,
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
