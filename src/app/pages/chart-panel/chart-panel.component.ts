import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexAxisChartSeries } from 'ng-apexcharts';
import { barChartCategories, barChartSeries, lineChartCategories, lineChartSeries, pieChartLabels, pieChartSeries } from 'src/app/sampleData';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss']
})
export class ChartPanelComponent {
pieChartLabels: any[] = pieChartLabels;
pieChartSeries: ApexNonAxisChartSeries = pieChartSeries ;
barChartSeries: ApexAxisChartSeries = barChartSeries;
barChartCategories: string[] = barChartCategories;
lineChartSeries: ApexAxisChartSeries = lineChartSeries ;
lineChartCategories: string[] =lineChartCategories;

}
