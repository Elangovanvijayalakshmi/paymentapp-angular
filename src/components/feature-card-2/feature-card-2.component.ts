import {Component,Input} from '@angular/core';

@Component({
    selector: 'feature-card-2',
    templateUrl: './feature-card-2.component.html'
})
export class FeatureCard2Component {
    @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'Bank Account Details'
  @Input()
  description: string = 'Know Your Bank Account Info'
  @Input()
  action: string = 'SEE MORE'
  @Input()
  image_src: string = 'src/assets/acc.jpg'
  @Input()
  image_alt: string = 'BankAccount'
}