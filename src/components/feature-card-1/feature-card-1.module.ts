import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureCard1Component} from './feature-card-1.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FeatureCard1Component
    ],
    exports: [
        FeatureCard1Component
    ]
})
export class FeatureCard1Module {}
