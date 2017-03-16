
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { D3MapComponent } from './d3-map.component';
import { D3MapService } from './d3-map.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        D3MapComponent
    ],
    providers: [ D3MapService ],
    declarations: [ D3MapComponent ],
    bootstrap: [ D3MapComponent ],
    
})
export class D3MapModule { }