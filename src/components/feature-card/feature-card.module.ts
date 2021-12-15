import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureCardComponent} from './feature-card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FeatureCardComponent
    ],
    exports: [
        FeatureCardComponent
    ]
})
export class FeatureCardModule {}
