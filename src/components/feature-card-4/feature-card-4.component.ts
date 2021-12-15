import {Component,Input} from '@angular/core';

@Component({
    selector: 'feature-card-4',
    templateUrl: './feature-card-4.component.html'  
})
export class FeatureCard4Component {
        @Input()
        rootClassName: string = ''
        @Input()
        title: string = 'BillPayment Details'
        @Input()
        description: string = 'Know Your BillPayment Info'
        @Input()
        action: string = 'SEE MORE'
        @Input()
        image_src: string = 'src/assets/bill.png'
        @Input()
        image_alt: string = 'Billpayment'
      }  

