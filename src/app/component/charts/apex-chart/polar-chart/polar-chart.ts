import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex-chart';

@Component({
  selector: 'app-polar-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './polar-chart.html',
  styleUrl: './polar-chart.scss',
})
export class PolarChart {
  public PolarChart = chartData.Polar;
}
