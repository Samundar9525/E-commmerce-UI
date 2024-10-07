import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() iconClass: string = 'fa fa-heartbeat'; // Default icon
  @Input() label: string = 'Label';
  @Input() value: string | number = '0';
  @Input() changeType: string = 'up';
  @Input() changeValue: string = '0%';
  @Input() sinceText: string = 'Since last month';
  @Input() cardColor: string = '#623ce8'; // Default color for the icon background
}
