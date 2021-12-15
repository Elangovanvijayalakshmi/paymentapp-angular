import {Component,Input} from '@angular/core';

@Component({
    selector: 'feature-card-3',
    templateUrl: './feature-card-3.component.html'
})
export class FeatureCard3Component {
    @Input()
    rootClassName: string = ''
    @Input()
    title: string = 'Transaction Details'
    @Input()
    description: string = 'Know Your Transaction Info'
    @Input()
    action: string = 'SEE MORE'
    @Input()
    image_src: string = 'src/assets/trans.png'
    @Input()
    image_alt: string = 'Transaction'
  }