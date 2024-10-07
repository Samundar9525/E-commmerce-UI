import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTooltip,
  ChartComponent,
} from 'ng-apexcharts';

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<BarChartOptions>;

  @Input() series!: ApexAxisChartSeries;
  @Input() chartHeight: number = 340;
  @Input() chartType: any = 'bar';
  @Input() stack: boolean = true;
  @Input() categories: string[] = [];
  @Input() titleText: string = '';
  @Input() colors: string[] = [
    '#00D8B6',
    '#008FFB',
    '#FEB019',
    '#FF4560',
    '#775DD0',
  ];

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      chart: {
        type: this.chartType,
        height: this.chartHeight,
        stacked: this.stack,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          // Additional plot options can be added here
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 2,
      },
      xaxis: {
        categories: this.categories,
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#78909c',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      title: {
        text: this.titleText,
        align: 'center',
        style: {
          fontSize: '18px',
        },
      },
      tooltip: {
        y: {
          formatter: (val: any) => val,
        },
      },
      fill: {
        opacity: 1,
      },
    };
  }
}
