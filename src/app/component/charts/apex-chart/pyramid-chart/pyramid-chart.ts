import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-pyramid-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './pyramid-chart.html',
  styleUrl: './pyramid-chart.scss',
})
export class PyramidChart {
  public pyramidChart = chartData.PyramidChart;
}
