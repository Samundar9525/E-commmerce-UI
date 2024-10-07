import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexTitleSubtitle,
  ApexMarkers,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from 'ng-apexcharts';

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors:any;
  subtitle:any;
};

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<LineChartOptions>;

  @Input() series!: ApexAxisChartSeries;
  @Input() chartHeight: number = 250;
  @Input() chartType: any = 'line';
  @Input() titleText: string = '';
  @Input() subtitleText: string = '';
  @Input() categories: string[] = [];
  @Input() colors: string[] = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      chart: {
        type: this.chartType,
        height: this.chartHeight,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      colors: this.colors,
      xaxis: {
        categories: this.categories,
        labels: {
          show: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: '#78909c'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        min: 0
      },
      title: {
        text: this.titleText,
        align: 'center',
        style: {
          fontSize: '18px'
        }
      },
      subtitle: {
        text: this.subtitleText,
        align: 'left',
        style: {
          fontSize: '14px',
          color: '#7c939f'
        }
      },
      markers: {
        size: 0
      },
      tooltip: {
        y: {
          formatter: (val: any) => val
        }
      }
    };
  }
}
