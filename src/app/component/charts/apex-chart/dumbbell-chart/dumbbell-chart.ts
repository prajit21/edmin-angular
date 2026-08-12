import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-dumbbell-chart',
  imports: [NgApexchartsModule],
  templateUrl: './dumbbell-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dumbbell-chart.scss',
})
export class DumbbellChart {
  public dumbbellChart = chartData.DumbbellChart;
}
