import {Component,Input} from '@angular/core';

@Component({
    selector: 'feature-card-1',
    templateUrl: './feature-card-1.component.html'
})
export class FeatureCard1Component {
    @Input()
    rootClassName: string = ''
    @Input()
    title: string = 'Beneficiary Details'
    @Input()
    description: string = 'Know Your Beneficiary Info'
    @Input()
    action: string = 'SEE MORE'
    @Input()
    image_src: string = 'src/assets/bene.png'
    @Input()
    image_alt: string = 'Beneficiary'
    
}
