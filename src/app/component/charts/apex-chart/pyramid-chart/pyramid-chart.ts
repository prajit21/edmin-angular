import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-pyramid-chart',
  imports: [NgApexchartsModule],
  templateUrl: './pyramid-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pyramid-chart.scss',
})
export class PyramidChart {
  public pyramidChart = chartData.PyramidChart;
}
