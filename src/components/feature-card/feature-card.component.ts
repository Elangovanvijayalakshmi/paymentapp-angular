import {Component,Input} from '@angular/core';

@Component({
    selector: 'feature-card',
    templateUrl: './feature-card.component.html'
})
export class FeatureCardComponent {
    @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'Wallet Details'
  @Input()
  description: string = 'Know Your Wallet Balance'
  @Input()
  action: string = 'SEE MORE'
  @Input()
  image_src: string = 'src/assets/wal.png'
  @Input()
  image_alt: string = 'Wallet'
}
