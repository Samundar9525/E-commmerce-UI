import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexLegend,
  ApexDataLabels,
  ApexStroke,
  ApexResponsive,
  ChartComponent
} from 'ng-apexcharts';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
  colors:any;
};

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<PieChartOptions>;

  @Input() series!: ApexNonAxisChartSeries;
  @Input() labels: any[] = [];
  @Input() chartHeight: number = 340;
  @Input() titleText: string = '';
  @Input() colors: string[] = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      chart: {
        type: 'donut',
        height: this.chartHeight,
        toolbar: {
          show: false
        }
      },
      labels: this.labels,
      colors: this.colors,
      title: {
        text: this.titleText,
        align: 'center',
        style: {
          fontSize: '18px'
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                formatter: (w: any) => w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['#fff']
      },
      legend: {
        position: 'right',
        offsetY: 30
      },
      responsive: [{
        breakpoint: 768,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
  }

}
