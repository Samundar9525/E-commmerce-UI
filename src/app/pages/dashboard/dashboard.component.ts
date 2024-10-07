import { Component } from '@angular/core';
import { statCards } from 'src/app/sampleData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
statCards: any = statCards;

}
