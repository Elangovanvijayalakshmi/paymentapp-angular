import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillPayComponent} from './bill-pay.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BillPayComponent
    ],
    exports: [
        BillPayComponent
    ]
})
export class BillPayModule {}
