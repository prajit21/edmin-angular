import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-polar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './polar-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './polar-chart.scss',
})
export class PolarChart {
  public PolarChart = chartData.Polar;
}
