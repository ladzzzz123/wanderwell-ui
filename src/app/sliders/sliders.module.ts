import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MdSliderModule } from '@angular/material';

import { SlidersComponent }           from './sliders.component';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ],
  exports: [
      SlidersComponent
      
  ],
  declarations: [
    SlidersComponent
  ]
})
export class SlidersModule {}
