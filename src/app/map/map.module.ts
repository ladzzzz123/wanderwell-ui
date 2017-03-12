
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { MapService } from './map.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: ''
        })
    ],
    exports: [
        MapComponent
    ],
    providers: [ MapService ],
    declarations: [MapComponent],
    bootstrap: [MapComponent],
    
})
export class MapModule { }